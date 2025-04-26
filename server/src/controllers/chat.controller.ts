import { Request, Response } from "express";
import { AuthorizedRequest } from "../types/types";
import { prisma } from "../lib/db";
import send from "../utils/response.utils";
import chatSchema from "../validations/chat.schema";
import { z } from "zod";
import { Prisma } from "../../generated/prisma";
import { UUID } from "crypto";
import { ChatSocketHandler } from "../socket/chat.events";

export const fullChatInclude: Prisma.chatInclude = {
    chat_participant: {
        include: {
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    profilePic: true,
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
                    profilePic: true,
                }
            }
        }
    }
}

class ChatController {
    // get user's all chat
    public async getUserChats(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;

        const start = Date.now();
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
                                    profilePic: true,
                                }
                            }
                        }
                    }
                },
            })
            console.log('DB Query Time:', Date.now() - start, 'ms');
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
        const { chatId, message, otherUserId } = req.body as z.infer<typeof chatSchema.sendMessage>;

        try {
            const chatExists = await prisma.chat.findFirst({
                where: {
                    id: chatId,
                    chat_participant: {
                        some: { userId: id },
                    }
                },
                include: {
                    chat_participant: {
                        include: { user: true }
                    },
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
                            profilePic: true
                        }
                    }
                }
            })

            const chat = {
                ...chatExists,
                message: [newMessage]
            }

            ChatSocketHandler.sendMessage({
                senderId: id as UUID,
                receiverId: otherUserId as UUID,
                chat
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


// {
//     id: 'd8071070-b1de-4df9-b998-7bbcaa8cc8eb',
//     createdAt: 2025-04-19T20:55:30.890Z,
//     updatedAt: 2025-04-19T20:55:30.890Z,
//     chat_participant: [
//       {
//         id: '918c0bbf-ad3e-40a9-b79d-a7529b2da9db',
//         userId: 'f9b4fd5c-86f3-4487-b866-dd8523ecc990',
//         chatId: 'd8071070-b1de-4df9-b998-7bbcaa8cc8eb',
//         user: [Object]
//       },
//       {
//         id: '7bd5176c-fb4b-4d90-b10b-361294b9fd69',
//         userId: '7121fb38-c86d-4c38-90e3-7ddad08944ce',
//         chatId: 'd8071070-b1de-4df9-b998-7bbcaa8cc8eb',
//         user: [Object]
//       }
//     ],
//     message: [
//       {
//         id: 'e4f1eadc-ca38-4987-9b40-d9317659718d',
//         message: '123',
//         senderId: 'f9b4fd5c-86f3-4487-b866-dd8523ecc990',
//         chatId: 'd8071070-b1de-4df9-b998-7bbcaa8cc8eb',
//         createdAt: 2025-04-21T19:52:02.692Z,
//         updatedAt: 2025-04-21T19:52:02.692Z,
//         sender: [Object]
//       }
//     ]
//   }