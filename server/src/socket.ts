import { Server as SocketIOServer } from "socket.io";
import authMiddleware from "./middleware/auth.middleware";
import { AuthorizedSocketRequest, UserType } from "./types/types";
import { UUID } from "crypto";
import { prisma } from "./lib/db";
import { fullChatInclude } from "./controllers/chat.controller";

const connectedUsers = new Map<string, string>();

export class SocketServer {
    constructor(private io: SocketIOServer) {
        this.io.use((socket, next) => authMiddleware.authorizeSocket(socket, next));
    }


    public registerHandlers() {
        this.io.on("connection", (socket: AuthorizedSocketRequest) => {
            const user = socket.user as UserType;

            connectedUsers.set(user.id, socket.id);
            console.log(`✅ ${user.firstname} connected with socket ID ${socket.id}`);

            this.statEvents();
            this.chatEvents(socket);

            socket.on("disconnect", () => {
                console.log(`X  User Disconnected ${socket.id}`);
                
                connectedUsers.delete(user.id)
                this.statEvents();
            });
        });
    }

    private async chatEvents(socket: AuthorizedSocketRequest) {
        const user = socket.user as UserType;
        socket.on("send-message", async (payload: { message: string, chatId: UUID, otherUserId: UUID }) => {
            const chat = await prisma.chat.findFirst({
                where: {
                    id: payload.chatId
                },
                include: {
                    chat_participant: fullChatInclude.chat_participant,
                    message: {
                        orderBy: { createdAt: "desc" },
                        take: 1,
                        include: {
                            sender: {
                                select: {
                                    id: true,
                                    firstname: true,
                                    lastname: true,
                                    email: true,
                                }
                            }
                        }
                    }
                }
            })

            if (chat) {
                const userSocketId = connectedUsers.get(user.id);
                const otherUserSocketId = connectedUsers.get(payload.otherUserId);

                if (userSocketId) {
                    this.io.to(userSocketId).emit("new-message", {
                        chat
                    });
                }

                if (otherUserSocketId) {
                    this.io.to(otherUserSocketId).emit("new-message", {
                        chat,
                        sound: true,
                    });
                }
            }

        });

        socket.on("init-or-load-chat", async (payload: { targetUserId: UUID }) => {
            const chat = await prisma.chat.findFirst({
                where: {
                    AND: [
                        {
                            chat_participant: {
                                some: { userId: user.id }
                            }
                        },
                        {
                            chat_participant: {
                                some: { userId: payload.targetUserId }
                            }
                        }
                    ]
                },
                include: fullChatInclude
            })

            if (chat) {
                socket.emit("chat-loaded", { chat })
            }
        })

        socket.on("typing", async (payload: { chatId: UUID, receiverId: UUID }) => {
            const targetSocketId = connectedUsers.get(payload.receiverId);

            if (targetSocketId) {
                this.io.to(targetSocketId).emit("user-typing", {
                    chatId: payload.chatId,
                    user: socket.user, // sender info
                });
            }
        })

        socket.on("stop-typing", (payload: { chatId: UUID, receiverId: UUID }) => {
            const targetSocketId = connectedUsers.get(payload.receiverId);

            if (targetSocketId) {
                this.io.to(targetSocketId).emit("user-stopped-typing", {
                    chatId: payload.chatId,
                    user: socket.user,  // user who stopped typing
                });
            }
        })
    }

    private async statEvents() {
        const onlineUsersIds = Array.from(connectedUsers.keys());
        this.io.emit("online-users", { onlineUsersIds })
    }
}