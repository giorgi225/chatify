import { Request, Response } from "express";
import { z } from "zod";
import authSchema from "../validations/auth.schema";
import { prisma } from "../lib/db";
import bcryptjs from "bcryptjs";
import send from "../utils/response.utils";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { clearJwtCookies, getTokens, setJwtCookies } from "../utils/jwt.utils";
import authConfig from "../config/auth.config";
import cleanData from "../utils/cleanData.utils";
import emailServices from "../services/email.services";
import { generate6Digit, generateFutureDateFromDuration, generateMilesecondsFromTimeString } from "../utils/generate.utils";
import emailConfig from "../config/email.config";
import { email_verification, reset_password, } from "../../generated/prisma";
import { fullChatInclude } from "./chat.controller";
import { addMilliseconds, differenceInSeconds } from "date-fns";

class AuthController {
    // login
    public async login(req: Request, res: Response) {
        const { email, password } = req.body as z.infer<typeof authSchema.login>;

        try {
            // check if user exists
            const user = await prisma.user.findUnique({ where: { email }, include: { email_verification: true } });
            if (!user) return send.validationError(res, { email: ["Invalid credentials"] });

            // check if password matches
            const passwordMatches = await bcryptjs.compare(password, user.password);
            if (!passwordMatches) return send.validationError(res, { email: ["Invalid credentials"] });

            // check if email is verified
            const emailVerified = user.email_verification?.verified;
            if (!emailVerified) {
                const { EMAIL_VERIFICATION_MAX_ATTEMPTS: maxAttempts, EMAIL_VERIFICATION_COOLDOWN: cooldown } = emailConfig;
                const emailVerification = user.email_verification as email_verification;

                // check rate limit
                const now = new Date();
                const cooldownMs = generateMilesecondsFromTimeString(cooldown);

                if (emailVerification.lastSentAt) {
                    const resetTime = addMilliseconds(emailVerification.lastSentAt, cooldownMs);

                    if (now < resetTime) {
                        if (emailVerification.sendAttempts >= maxAttempts) {
                            const secondsRemaining = differenceInSeconds(resetTime, now);
                            return send.tooManyRequests(res, {
                                secondsRemaining,
                            }, `Too many requests. can send again in ${secondsRemaining} second`)
                        }
                    } else {
                        await prisma.email_verification.update({
                            where: { userId: user.id },
                            data: { sendAttempts: 0 }
                        })
                    }
                }

                const code = generate6Digit();
                const expiresIn = generateFutureDateFromDuration(emailConfig.EMAIL_VERIFICATION_EXPIRES_IN);

                const { ok: emailSend } = await emailServices.sendEmailVerification({
                    code: code,
                    to: email
                })
                if (!emailSend) return send.serverError(res, `cant send verification mail on: ${email}. please try again or contact us!`);

                await prisma.user.update({
                    where: { email },
                    data: {
                        email_verification: {
                            update: {
                                code,
                                expiresIn
                            }
                        }

                    },
                })
                return send.unauthorized(res, {}, "We send 6 digit code on your email! please verify to login.", "verify-email")
            };

            const { accessToken, refreshToken } = getTokens({ id: user.id });
            setJwtCookies(res, accessToken, refreshToken);

            return send.success(res, cleanData.user(user), "Logged in successfully");
        } catch (error) {
            console.error(error);
            return send.serverError(res);
        }
    }

    // register
    public async register(req: Request, res: Response) {
        const { firstname, lastname, email, password, token } = req.body as z.infer<typeof authSchema.register>;

        try {
            // check if user exists
            const user = await prisma.user.findUnique({ where: { email } });
            if (user) return send.conflict(res, { email: ["Email already exists"] });

            const hashedPassword = await bcryptjs.hash(password, 10);

            // if invitation token provided
            if (token) {
                const invitation = await prisma.invitation.findUnique({ where: { token } });

                if (!invitation || invitation.email !== email) {
                    return send.notFound(res, {}, "Invalid or expired invitation token");
                }

                const newUser = await prisma.user.create({
                    data: {
                        firstname,
                        lastname,
                        email,
                        password: hashedPassword,
                        email_verification: {
                            create: {
                                verified: true,
                                verifiedAt: new Date()
                            }
                        }

                    },
                })

                await prisma.invitation.delete({ where: { token } });

                await prisma.chat.create({
                    data: {
                        chat_participant: {
                            create: [
                                { user: { connect: { id: invitation.inviterId } } },
                                { user: { connect: { id: newUser.id } } }
                            ]
                        },
                    },
                    include: fullChatInclude
                })

                const { accessToken, refreshToken } = getTokens({ id: newUser.id });
                setJwtCookies(res, accessToken, refreshToken);

                return send.success(res, cleanData.user(newUser), "Registered, Chat Created with inviter & Logged in successfully");
            }

            // send email verification
            const code = generate6Digit();
            const expiresIn = generateFutureDateFromDuration(emailConfig.EMAIL_VERIFICATION_EXPIRES_IN);

            const { ok: emailSend } = await emailServices.sendEmailVerification({
                code: code,
                to: email
            })

            if (!emailSend) return send.serverError(res, `cant send verification mail on: ${email}. please try again or contact us!`);

            const newUser = await prisma.user.create({
                data: {
                    firstname,
                    lastname,
                    email,
                    password: hashedPassword,
                    email_verification: {
                        create: {
                            code,
                            expiresIn
                        }
                    }

                },
            })

            return send.success(res, cleanData.user(newUser), "Account created successfully, Please verify your email!")
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    // logout
    public async logout(req: Request, res: Response) {
        try {
            clearJwtCookies(res);
            return send.success(res, {}, "Logged out successfully");
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    // reset password
    public async resetPassword(req: Request, res: Response) {
        const { step1: { email }, step2 } = req.body as z.infer<typeof authSchema.forgotPassword>;

        try {
            const user = await prisma.user.findUnique({ where: { email }, include: { reset_password: true } });
            if (!user) return send.notFound(res, { email: ["Cant find user with this email"] });

            let ResetPassword = user.reset_password;

            if (!ResetPassword) {
                ResetPassword = await prisma.reset_password.create({
                    data: {
                        userId: user.id,
                    }
                })
            }

            if (!step2) {
                const code = generate6Digit();
                const expiresIn = generateFutureDateFromDuration(emailConfig.EMAIL_VERIFICATION_EXPIRES_IN);

                const { ok: emailSend } = await emailServices.sendEmailVerification({
                    code: code,
                    to: email,
                    subject: "Password reset code"
                })

                if (!emailSend) return send.serverError(res, `cant send verification mail on: ${email}. please try again or contact us!`);

                await prisma.user.update({
                    where: { email },
                    data: {
                        reset_password: {
                            update: {
                                code,
                                expiresIn,
                                sendAttempts: { increment: 1 },
                                lastSentAt: new Date(),
                            }
                        }
                    }
                })

                return send.success(res, {}, "Reset passwrod Code has been sent successfully on your email");
            } else {
                const user = await prisma.user.findUnique({ where: { email }, include: { reset_password: true } });
                if (!user) return send.notFound(res, { email: ["Cant find user with this email"] });

                const ResetPassword = user.reset_password as reset_password;
                const { code, password } = step2;

                const codeMatches = code === ResetPassword.code;
                if (!codeMatches) return send.validationError(res, { code: ["code is invalid."] });

                const codeExpired = new Date() > (ResetPassword.expiresIn as Date);
                if (codeExpired) return send.validationError(res, { code: ["code is expired"] });

                const isSame = await bcryptjs.compare(password, user.password);
                if (isSame) return send.conflict(res, { password: ["New password cant be same as old password"] });

                const newHashedPassword = await bcryptjs.hash(password, 10);

                await prisma.user.update({
                    where: { email },
                    data: {
                        password: newHashedPassword,
                        reset_password: {
                            update: {
                                code: null,
                                expiresIn: null,
                                resetedAt: new Date()
                            }
                        }
                    }
                })

                return send.success(res, {}, "Password reseted successfully!")


            }

        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    // refresh token
    public async refreshToken(req: Request, res: Response) {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return send.unauthorized(res, {}, "No refresh token provided")
        }

        try {
            const decodedToken = jwt.verify(refreshToken, authConfig.REFRESH_SECRET) as { id: string };
            const user = await prisma.user.findUnique({
                where: { id: decodedToken.id }
            })

            if (!user) return send.unauthorized(res, {}, "User not found.");

            const { accessToken } = getTokens({ id: user.id });
            setJwtCookies(res, accessToken);

            return send.success(res, cleanData.user(user), "Token refreshed successfully")
        } catch (error) {
            console.error(error);

            if (error instanceof JsonWebTokenError) {
                return send.unauthorized(res, {}, error.message)
            }

            return send.serverError(res)
        }
    }

    // verify email
    public async verifyEmail(req: Request, res: Response) {
        const { email, code } = req.body as z.infer<typeof authSchema.verifyEmail>;

        try {
            const user = await prisma.user.findUnique({ where: { email }, include: { email_verification: true } });
            if (!user) return send.conflict(res, { email: ["No user found with the provided email!"] });

            const emailVerification = user.email_verification as email_verification;

            const verified = emailVerification.verified;
            if (verified) return send.conflict(res, { email: ["Email is already verified."] });

            const codeMatches = code === emailVerification.code;
            if (!codeMatches) return send.validationError(res, { code: ["The verification code is invalid."] });

            const codeExpired = new Date() > (emailVerification.expiresIn as Date);
            if (codeExpired) return send.validationError(res, { code: ["Verification code is expired"] })

            await prisma.user.update({
                where: { email },
                data: {
                    email_verification: {
                        update: {
                            code: null,
                            verified: true,
                            expiresIn: null,
                            verifiedAt: new Date(),
                        }
                    }
                }
            })

            const { accessToken, refreshToken } = getTokens({ id: user.id });
            setJwtCookies(res, accessToken, refreshToken);

            return send.success(res, cleanData.user(user), "Logged in, Your email has been successfully verified")
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    // send email verification code
    public async sendEmailVerification(req: Request, res: Response) {
        const { email } = req.body as z.infer<typeof authSchema.sendEmailVerification>;
        const { EMAIL_VERIFICATION_MAX_ATTEMPTS: maxAttempts, EMAIL_VERIFICATION_COOLDOWN: cooldown } = emailConfig;

        try {
            const user = await prisma.user.findUnique({ where: { email }, include: { email_verification: true } });
            if (!user) return send.conflict(res, { email: ["No user found with the provided email!"] });

            const emailVerification = user.email_verification as email_verification;

            const verified = emailVerification.verified;
            if (verified) return send.conflict(res, { email: ["Email already verified"] });

            // check rate limit
            const now = new Date();
            const cooldownMs = generateMilesecondsFromTimeString(cooldown);
            let resetTime: Date | null = null;
            if (emailVerification.lastSentAt) {
                resetTime = addMilliseconds(emailVerification.lastSentAt, cooldownMs);

                if (now < resetTime) {
                    if (emailVerification.sendAttempts >= maxAttempts) {
                        const secondsRemaining = differenceInSeconds(resetTime, now);
                        return send.tooManyRequests(res, {
                            secondsRemaining,
                            resetTime
                        }, `Too many requests. can send again in ${secondsRemaining} second`)
                    }
                } else {
                    await prisma.email_verification.update({
                        where: { userId: user.id },
                        data: { sendAttempts: 0 }
                    })
                }
            }

            const code = generate6Digit();
            const expiresIn = generateFutureDateFromDuration(emailConfig.EMAIL_VERIFICATION_EXPIRES_IN);

            const { ok: emailSend } = await emailServices.sendEmailVerification({
                code: code,
                to: email
            })

            if (!emailSend) return send.serverError(res, `cant send verification mail on: ${email}. please try again or contact us!`);

            await prisma.user.update({
                where: { email },
                data: {
                    email_verification: {
                        update: {
                            code,
                            expiresIn,
                            sendAttempts: { increment: 1 },
                            lastSentAt: new Date(),
                        }
                    }

                },
            })

            return send.success(res, {
                resetTime: addMilliseconds(new Date(), cooldownMs)
            }, "Code has been sent successfully");
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    // get info about verification code send limit
    public async getVerificationLimitInfo(req: Request, res: Response) {
        const { email } = req.body as z.infer<typeof authSchema.sendEmailVerification>;
        const {
            EMAIL_VERIFICATION_MAX_ATTEMPTS: maxAttempts,
            EMAIL_VERIFICATION_COOLDOWN: cooldown
        } = emailConfig;

        try {
            // Find user with email verification data
            const user = await prisma.user.findUnique({
                where: { email },
                include: { email_verification: true }
            });

            if (!user) {
                return send.conflict(res, { email: ["No user found with the provided email!"] });
            }

            // Check if email is already verified
            if (user.email_verification?.verified) {
                return send.success(res, {
                    status: "already_verified",
                    allowed: false,
                    message: "Email is already verified"
                });
            }

            const now = new Date();
            const cooldownMs = generateMilesecondsFromTimeString(cooldown);
            const emailVerification = user.email_verification;

            // If no verification record exists or never sent before
            if (!emailVerification || !emailVerification.lastSentAt) {
                return send.success(res, {
                    status: "ready",
                    allowed: true,
                    remainingAttempts: maxAttempts,
                    resetTime: null
                });
            }

            const resetTime = addMilliseconds(emailVerification.lastSentAt, cooldownMs);

            // If still within cooldown period
            if (now < resetTime) {
                const remainingAttempts = Math.max(0, maxAttempts - emailVerification.sendAttempts);
                const secondsRemaining = Math.ceil((resetTime.getTime() - now.getTime()) / 1000);

                // If attempts exceeded
                if (emailVerification.sendAttempts >= maxAttempts) {
                    return send.success(res, {
                        status: "rate_limited",
                        allowed: false,
                        remainingAttempts: 0,
                        resetTime: resetTime.toISOString(),
                        secondsRemaining,
                        message: `You've exceeded the maximum attempts. Please try again in ${secondsRemaining} seconds.`
                    });
                }

                // If attempts remaining
                return send.success(res, {
                    status: "cooldown_active",
                    allowed: true,
                    remainingAttempts,
                    resetTime: resetTime.toISOString(),
                    secondsRemaining
                });
            }

            // If cooldown period has passed
            return send.success(res, {
                status: "ready",
                allowed: true,
                remainingAttempts: maxAttempts,
                resetTime: null
            });

        } catch (error) {
            console.error("Error checking email verification status:", error);
            return send.serverError(res, "An error occurred while checking verification status");
        }
    }
    public async getToken(req: Request, res: Response) {
        // validating both cookies in middleware after pass returning accessToken to init socket
        return send.success(res, { token: req.cookies.accessToken });
    }
}

const authController = new AuthController();
export default authController;