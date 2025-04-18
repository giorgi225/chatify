import { Request, Response } from "express";
import { AuthorizedRequest } from "../types/types";
import { prisma } from "../lib/db";
import send from "../utils/response.utils";
import cleanData from "../utils/cleanData.utils";
import { z } from "zod";
import userSchema from "../validations/user.schemas";
import crypto from "crypto";
import emailServices from "../services/email.services";

class UserController {
    public async getUser(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;
        try {
            const user = await prisma.user.findUnique({ where: { id } });
            if (!user) return send.unauthorized(res, {});

            return send.success(res, cleanData.user(user))
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    public async inviteFriend(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;
        const { email } = req.body as z.infer<typeof userSchema.inviteFriend>;

        try {
            const inviter = await prisma.user.findUnique({ where: { id } });
            if (!inviter) return send.notFound(res, {}, "Inviter not found");

            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                if (existingUser.id === id) return send.conflict(res, { email: ["You can't invite yourself"] });

                return send.success(res, { user: cleanData.user(existingUser) }, "User already exists. You can start a chat instead.");
            }

            const existingInvitation = await prisma.invitation.findFirst({
                where: {
                    email,
                    inviterId: id
                }
            })
            if (existingInvitation) return send.conflict(res, { email: ["Invitation is already sended on this mail"] });


            const token = crypto.randomBytes(32).toString("hex");

            const { ok: emailSend } = await emailServices.sendEmailInvitation({
                token,
                inviterFullname: inviter.firstname + " " + inviter.lastname,
                to: email
            })

            if (!emailSend) return send.serverError(res, `cant send invitation on: ${email}. please try again or contact us!`);

            await prisma.invitation.deleteMany({ where: { email } });
            await prisma.invitation.create({
                data: {
                    email,
                    token,
                    inviterId: id
                }
            })

            return send.success(res, {
                email
            }, "Invitation sended successfully");

        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }

    }

    public async validateInvitation(req: Request, res: Response) {
        const { token } = req.body as z.infer<typeof userSchema.validateInvitation>;

        try {
            const invitation = await prisma.invitation.findUnique({ where: { token }, include: { inviter: true } });
            if (!invitation) return send.notFound(res, {}, "Invitation token is invalid or has expired!");

            return send.success(res, { email: invitation.email, inviter: cleanData.user(invitation.inviter) });
        } catch (error) {
            console.error(error);
            return send.serverError(res);
        }
    }
}

const userController = new UserController;
export default userController;