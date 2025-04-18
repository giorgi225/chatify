import { NextFunction, Request, Response } from "express";
import send from "../utils/response.utils";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import authConfig from "../config/auth.config";
import { prisma } from "../lib/db";
import { email_verification } from "../../generated/prisma";
import { Socket } from "socket.io";
import cleanData from "../utils/cleanData.utils";
import { AuthorizedRequest, AuthorizedSocketRequest } from "../types/types";

class AuthMiddleware {
    public async authorize(req: Request, res: Response, next: NextFunction) {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) return send.unauthorized(res, {}, "No Access Token");

        try {
            const decodedToken = jwt.verify(accessToken, authConfig.ACCESS_SECRET) as { id: string };
            const user = await prisma.user.findUnique({
                where: { id: decodedToken.id },
                include: { email_verification: true }
            })
            const emailVerification = user?.email_verification as email_verification;
            const verified = emailVerification.verified;

            if (!verified) return send.unauthorized(res, {}, "Email is unverified");

            if (!user) return send.unauthorized(res, {}, "User not found");

            (req as AuthorizedRequest).userId = user.id;
            next();
        } catch (error) {
            if (error instanceof JsonWebTokenError) {
                if (error.message === "jwt expired") {
                    return send.unauthorized(res, {}, error.message)
                }
                return send.unauthorized(res, {}, error.message)
            }

            return send.serverError(res);
        }
    }

    // public async authorizeSocket(socket: Socket, next: (err?: Error) => void) {
    //     const cookieString = socket.handshake.headers.cookie || "";

    //     const cookies = Object.fromEntries(cookieString.split("; ").map(c => c.split("=")));
    //     const accessToken = cookies.accessToken;
    //     const refreshToken = cookies.refreshToken;        

    //     try {
    //         if (!accessToken) return next(new Error("No Access Token"));

    //         const decodedToken = jwt.verify(accessToken, authConfig.ACCESS_SECRET) as { id: string };
    //         const user = await prisma.user.findUnique({
    //             where: { id: decodedToken.id },
    //             include: { email_verification: true },
    //         });

    //         const emailVerification = user?.email_verification as email_verification;
    //         if (!user || !emailVerification?.verified) {
    //             return next(new Error("User not found or email unverified"));
    //         }

    //         // Attach user or userId to socket
    //         (socket as any).user = cleanData.user(user);

    //         next();
    //     } catch (error) {
    //         if (error instanceof JsonWebTokenError) {
    //             if (error.message === "jwt expired") {
    //                 if (!refreshToken) return next(new Error("No Access Token"));
    //                 const decodedToken = jwt.verify(refreshToken, authConfig.REFRESH_SECRET) as { id: string };
    //                 const user = await prisma.user.findUnique({
    //                     where: { id: decodedToken.id },
    //                     include: { email_verification: true },
    //                 });

    //                 if (user) {
    //                     (socket as any).user = cleanData.user(user);
    //                     return next();
    //                 }
    //             }
    //         }
    //         console.error("Socket auth error:", error);
    //         return next(new Error("Socket authorization failed"));
    //     }

    // }

    public async authorizeSocket(socket: Socket, next: (err?: Error) => void) {
        const accessToken = socket.handshake.auth.token;
        try {
            if (!accessToken) return next(new Error("No Access Token"));

            const decodedToken = jwt.verify(accessToken, authConfig.ACCESS_SECRET) as { id: string };
            const user = await prisma.user.findUnique({
                where: { id: decodedToken.id },
                include: { email_verification: true },
            });

            const emailVerification = user?.email_verification as email_verification;
            if (!user || !emailVerification?.verified) {
                return next(new Error("User not found or email unverified"));
            }

            // Attach user or userId to socket
            (socket as AuthorizedSocketRequest).user = cleanData.user(user);

            next();
        } catch (error) {
            console.error(error);
            return next(new Error("Socket authorization failed"));
        }

    }
}

export default new AuthMiddleware();