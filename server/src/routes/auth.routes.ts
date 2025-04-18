import { Router } from "express";
import authController from "../controllers/auth.controller";
import validate from "../middleware/validate.middleware";
import authSchema from "../validations/auth.schema";

const authRoutes = Router();


authRoutes.post("/login", [validate.body(authSchema.login)], authController.login);
authRoutes.post("/register", [validate.body(authSchema.register)], authController.register);
authRoutes.post("/logout", authController.logout);

authRoutes.post("/refresh-token", authController.refreshToken);
authRoutes.post("/token", authController.getToken);

authRoutes.post("/reset-password", [validate.body(authSchema.forgotPassword)], authController.resetPassword)

authRoutes.post("/verify-email", [validate.body(authSchema.verifyEmail)], authController.verifyEmail);
authRoutes.post("/send-email-verification", [validate.body(authSchema.sendEmailVerification)], authController.sendEmailVerification);
authRoutes.post("/get-email-verification-limit-info", [validate.body(authSchema.sendEmailVerification)], authController.getVerificationLimitInfo)

export default authRoutes;