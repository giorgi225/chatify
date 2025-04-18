import { z } from "zod";

const sendMessage = z.object({
    message: z.string().min(1, "Message cannot be empty"),
    chatId: z.string().uuid(),
})

const initOrGetChat = z.object({
    otherUserId: z.string().uuid()
})

const chatSchema = {
    sendMessage,
    initOrGetChat
}

export default chatSchema;