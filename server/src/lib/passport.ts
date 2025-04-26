import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Request } from "express";
import OAuthConfig from "../config/oauth.config";
import { prisma } from "./db";
import { email_verification } from "../../generated/prisma";
import { getTokens } from "../utils/jwt.utils";
import { OauthRequest } from "../types/types";
import cleanData from "../utils/cleanData.utils";
import { generate6Digit, generateFutureDateFromDuration } from "../utils/generate.utils";
import emailServices from "../services/email.services";
import emailConfig from "../config/email.config";

console.log("Using callback URL:", OAuthConfig.GOOGLE_CALLBACK_URL);
// Initialize immediately
const googleStrategy = new GoogleStrategy(
    {
        clientID: OAuthConfig.GOOGLE_CLIENT_ID,
        clientSecret: OAuthConfig.GOOGLE_CLIENT_SECRET,
        callbackURL: OAuthConfig.GOOGLE_CALLBACK_URL,
        passReqToCallback: true,
    },
    async (req: Request, accessToken, refreshToken, profile, done) => {
        if (!profile?.emails?.[0]?.value) {
            throw new Error("Google didn't provide required profile information");
        }

        try {
            const email = profile.emails[0].value;
            const isGoogleEmailVerified = profile.emails[0].verified === true;
            const profilePic = profile?.photos?.[0]?.value ?? null;
            const firstname = profile.name?.givenName || "";
            const lastname = profile.name?.familyName || "";

            // 2. Check existing user
            const existingUser = await prisma.user.findUnique({
                where: { email },
                include: { email_verification: true }
            });

            // 3. Handle existing user
            if (existingUser) {
                console.log("User exists");

                const emailVerification = existingUser.email_verification as email_verification;

                // If email is verified - login user
                if (emailVerification.verified || isGoogleEmailVerified) {
                    console.log("User verified inside or outside");
                    if (!emailVerification.verified && isGoogleEmailVerified) {
                        console.log("User is not verified inside but verified outside");
                        await prisma.email_verification.update({
                            where: { userId: existingUser.id },
                            data: { verified: true, verifiedAt: new Date() }
                        });
                    }

                    console.log("Successfully passed");
                    const tokens = getTokens({ id: existingUser.id });
                    (req as OauthRequest).tokens = tokens;
                    (req as OauthRequest).authResponse = {
                        ok: true,
                        status: "success",
                        user: cleanData.user(existingUser)
                    }

                    return done(null, existingUser);
                }

                console.log("User not verified");
                // if email not verified - send verification code
                const code = generate6Digit();
                const expiresIn = generateFutureDateFromDuration(emailConfig.EMAIL_VERIFICATION_EXPIRES_IN);
                await Promise.all([
                    emailServices.sendEmailVerification({ code, to: email }),
                    prisma.email_verification.update({
                        where: { userId: existingUser.id },
                        data: {
                            code,
                            expiresIn,
                            sendAttempts: { increment: 1 },
                            lastSentAt: new Date()
                        }
                    })
                ]);

                console.log("Verification code sended to user and updated user verifications");
                (req as OauthRequest).authResponse = {
                    ok: false,
                    status: "verify-email",
                    user: cleanData.user(existingUser)
                }
                return done(null, existingUser);
            }

            // 4. Handle new user
            // Create user regardless of verification status
            console.log("Creating new user");
            const newUser = await prisma.user.create({
                data: {
                    email,
                    firstname,
                    lastname,
                    password: "google",
                    profilePic,
                    email_verification: {
                        create: {
                            verified: isGoogleEmailVerified,
                            sendAttempts: 0
                        }
                    }
                },
                include: { email_verification: true }
            });

            if (!isGoogleEmailVerified) {
                const code = generate6Digit();
                const expiresIn = generateFutureDateFromDuration(emailConfig.EMAIL_VERIFICATION_EXPIRES_IN);

                await Promise.all([
                    emailServices.sendEmailVerification({ code, to: email }),
                    prisma.email_verification.update({
                        where: { userId: newUser.id },
                        data: {
                            code,
                            expiresIn,
                            sendAttempts: 1,
                            lastSentAt: new Date()
                        }
                    })
                ]);


                (req as OauthRequest).authResponse = {
                    ok: false,
                    status: 'verify-email',
                    user: cleanData.user(newUser)
                };
                console.log("Created, unverified, sended code");
                return done(null, newUser);
            }


            console.log("Logged in");
            // Success case for verified new users
            const tokens = getTokens({ id: newUser.id });
            (req as OauthRequest).tokens = tokens;
            (req as OauthRequest).authResponse = {
                ok: true,
                status: "success",
                user: cleanData.user(newUser)
            };
            return done(null, newUser);

        } catch (error) {
            console.log("Error during google auth:" + error);
            done(error)
        }
    }
);

passport.use(googleStrategy); // Register the strategy synchronously


export default passport;


// const asd = {
//     id: '117719142202933789842',
//     displayName: 'gigi shalamberidze',
//     name: { familyName: 'shalamberidze', givenName: 'gigi' },
//     emails: [{ value: 'gigi.shalamberidze2022@gmail.com', verified: false }],
//     photos: [
//         {
//             value: 'https://lh3.googleusercontent.com/a/ACg8ocJL4TUH_N6mheEaFgbOh0wpSTnhyjd5_7W2OYOR0D-1aoOXZlo=s96-c'
//         }
//     ],
//     provider: 'google',
//     _raw: '{\n' +
//         '  "sub": "117719142202933789842",\n' +
//         '  "name": "gigi shalamberidze",\n' +
//         '  "given_name": "gigi",\n' +
//         '  "family_name": "shalamberidze",\n' +
//         '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocJL4TUH_N6mheEaFgbOh0wpSTnhyjd5_7W2OYOR0D-1aoOXZlo\\u003ds96-c",\n' +
//         '  "email": "gigi.shalamberidze2022@gmail.com",\n' +
//         '  "email_verified": true\n' +
//         '}',
//     _json: {
//         sub: '117719142202933789842',
//         name: 'gigi shalamberidze',
//         given_name: 'gigi',
//         family_name: 'shalamberidze',
//         picture: 'https://lh3.googleusercontent.com/a/ACg8ocJL4TUH_N6mheEaFgbOh0wpSTnhyjd5_7W2OYOR0D-1aoOXZlo=s96-c',
//         email: 'gigi.shalamberidze2022@gmail.com',
//         email_verified: true
//     }
// }