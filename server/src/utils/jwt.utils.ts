import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";
import { Response } from "express";
import { StringValue } from "../types/types";
import appConfig from "../config/app.config";

export const getTokens = (payload: object): { accessToken: string, refreshToken: string } => {
    const { ACCESS_SECRET, ACCESS_SECRET_EXPIRES_IN, REFRESH_SECRET, REFRESH_SECRET_EXPIRES_IN } = authConfig;

    const accessToken = jwt.sign(payload, ACCESS_SECRET, {
        expiresIn: ACCESS_SECRET_EXPIRES_IN as StringValue
    })
    const refreshToken = jwt.sign(payload, REFRESH_SECRET, {
        expiresIn: REFRESH_SECRET_EXPIRES_IN as StringValue
    })

    return {
        accessToken,
        refreshToken
    }
}

export const setJwtCookies = (res: Response, accessToken: string, refreshToken?: string) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        domain: appConfig.FRONTEND_URL,
        secure: process.env.NODE_ENV === "production"
    })

    if (refreshToken) {
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            domain: appConfig.FRONTEND_URL,
            secure: process.env.NODE_ENV === "production"
        })
    }
}

export const clearJwtCookies = (res: Response) => {
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
}
