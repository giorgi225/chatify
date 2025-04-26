import { UUID } from "crypto";
import { AuthorizedSocketRequest, UserType } from "../types/types";
import { prisma } from "../lib/db";
import { fullChatInclude } from "../controllers/chat.controller";
import socketService from "./index";
import { chat } from "../../generated/prisma";


export class ChatSocketHandler {
    private io = socketService.getIO();  // Cache the IO instance

    constructor(private socket: AuthorizedSocketRequest) {
        this.registerEvents();
    }

    private registerEvents() {
        this.sendOnlineUsers();
        this.socket.on("init-or-load-chat", this.handleInitOrLoadChat);
        this.socket.on("user-typing", this.handleTyping);
        this.socket.on("stop-typing", this.handleStopTyping);
    }

    private handleInitOrLoadChat = async (payload: { targetUserId: UUID }) => {
        const user = this.socket.user as UserType;

        const chat = await prisma.chat.findFirst({
            where: {
                AND: [
                    { chat_participant: { some: { userId: user.id } } },
                    { chat_participant: { some: { userId: payload.targetUserId } } }
                ]
            },
            include: fullChatInclude
        });

        if (chat) {
            this.socket.emit("chat-loaded", { chat });
        }
    };

    private sendOnlineUsers = () => {
        const onlineUsersIds = Array.from(socketService.getConnectedUsers().keys());
        this.io.emit("online-users", { onlineUsersIds });
    }

    private handleTyping = (payload: { chatId: UUID; receiverId: UUID }) => {
        const user = this.socket.user as UserType;
        const targetSocketId = socketService.getConnectedUsers().get(payload.receiverId);
        console.log(targetSocketId);

        if (targetSocketId) {
            this.io.to(targetSocketId).emit("user-typing", {
                chatId: payload.chatId,
                user,
            });
        }
    };

    private handleStopTyping = (payload: { chatId: UUID; receiverId: UUID }) => {
        const user = this.socket.user as UserType;
        const targetSocketId = socketService.getConnectedUsers().get(payload.receiverId);

        if (targetSocketId) {
            this.io.to(targetSocketId).emit("user-stopped-typing", {
                chatId: payload.chatId,
                user,
            });
        }
    };

    static sendMessage = async ({ senderId, receiverId, chat }: { senderId: UUID, receiverId: UUID, chat: chat }) => {
        const connectedUsers = socketService.getConnectedUsers();
        const userSocketId = connectedUsers.get(senderId);
        const otherUserSocketId = connectedUsers.get(receiverId);

        if (userSocketId) {
            socketService.getIO().to(userSocketId).emit("new-message", {
                chat
            });
        }

        if (otherUserSocketId) {
            socketService.getIO().to(otherUserSocketId).emit("new-message", {
                chat,
                sound: true,
            });
        }

    }
}