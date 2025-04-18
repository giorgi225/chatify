import { Request, Response } from "express";
import { AuthorizedRequest } from "../types/types";
import { prisma } from "../lib/db";
import send from "../utils/response.utils";
import chatSchema from "../validations/chat.schema";
import { z } from "zod";
import { Prisma } from "../../generated/prisma";

export const fullChatInclude: Prisma.chatInclude = {
    chat_participant: {
        include: {
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                }
            }
        }
    },
    message: {
        orderBy: { createdAt: "asc" },
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

class ChatController {
    // get user's all chat
    public async getUserChats(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;

        try {
            const chats = await prisma.chat.findMany({
                where: {
                    chat_participant: {
                        some: { userId: id }
                    }
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
                },
            })

            // sort by latest message 
            const sortedChats = chats.sort((a, b) => {
                const aDate = a.message[0]?.createdAt ? new Date(a.message[0].createdAt).getTime() : 0;
                const bDate = b.message[0]?.createdAt ? new Date(b.message[0].createdAt).getTime() : 0;
                return bDate - aDate; // descending
            });

            return send.success(res, { chats: sortedChats })
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }

    // init or get chat 
    public async initOrGetChat(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;
        const { otherUserId } = req.query as z.infer<typeof chatSchema.initOrGetChat>;

        try {
            const existedChat = await prisma.chat.findFirst({
                where: {
                    AND: [
                        {
                            chat_participant: {
                                some: { userId: id }
                            }
                        },
                        {
                            chat_participant: {
                                some: { userId: otherUserId }
                            }
                        }
                    ]
                },
                include: fullChatInclude
            })

            if (existedChat) return send.success(res, { chat: existedChat }, "Chat loaded successfully.");

            const newChat = await prisma.chat.create({
                data: {
                    chat_participant: {
                        create: [
                            { user: { connect: { id } } },
                            { user: { connect: { id: otherUserId } } }
                        ]
                    }
                },
                include: fullChatInclude
            })

            return send.success(res, { chat: newChat }, "Chat created successfully.")
        } catch (error) {
            console.error(error);
            return send.serverError(res);
        }
    }

    // send message
    public async sendMessage(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;
        const { chatId, message } = req.body as z.infer<typeof chatSchema.sendMessage>;

        try {
            const chatExists = await prisma.chat.findFirst({
                where: {
                    id: chatId,
                    chat_participant: {
                        some: { userId: id },
                    }
                }
            })

            if (!chatExists) return send.notFound(res, {}, "Chat does not exist or you are not allowed to send a message to this chat.");

            const newMessage = await prisma.message.create({
                data: {
                    chatId,
                    senderId: id,
                    message
                },
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
            })

            return send.success(res, { message: newMessage }, "Message sent successfully.")
        } catch (error) {
            console.error(error);
            return send.serverError(res)
        }
    }
}

const chatController = new ChatController();
export default chatController;
