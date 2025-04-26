import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";
import chatController from "../controllers/chat.controller";
import validate from "../middleware/validate.middleware";
import chatSchema from "../validations/chat.schema";

const chatRoutes = Router();

chatRoutes.get("/get-user-chats", [authMiddleware.authorize], chatController.getUserChats);
chatRoutes.get("/init-or-get-chat", [authMiddleware.authorize, validate.query(chatSchema.initOrGetChat)], chatController.initOrGetChat);
chatRoutes.post("/send-message", [authMiddleware.authorize, validate.body(chatSchema.sendMessage)], chatController.sendMessage);

export default chatRoutes;