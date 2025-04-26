import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";
import userController from "../controllers/user.controller";
import validate from "../middleware/validate.middleware";
import userSchema from "../validations/user.schemas";

const userRoutes = Router();

userRoutes.get("/info", [authMiddleware.authorize], userController.getUser);
userRoutes.post("/invite-friend", [authMiddleware.authorize, validate.body(userSchema.inviteFriend)], userController.inviteFriend);
userRoutes.post("/validate-invitation", [validate.body(userSchema.validateInvitation)], userController.validateInvitation);

export default userRoutes;