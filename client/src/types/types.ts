import { UUID } from "crypto"

export type ChatType = {
    id: UUID;
    createdAt: Date,
    updatedAt: Date,
    chat_participant: ChatParticipantType[]
    message: MessageType[]
}

export type ChatParticipantType = {
    id: UUID,
    userId: UUID,
    chatId: UUID,
    user: UserType
}

export type UserType = {
    id: UUID,
    firstname: string,
    lastname: string,
    email: string,
}

export type MessageType = {
    id: UUID,
    message: string,
    senderId: UUID,
    chatId: UUID,
    createdAt: string,
    updatedAt: string,
    sender: UserType
}

export type ResponseCodeType = "validation-error" | "unauthorized" | "conflict" | "server-error" | "verify-email" | "not-found" | "too-many-requests" | "success";
