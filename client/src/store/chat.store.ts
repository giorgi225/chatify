import { UUID } from "crypto";

import { create } from "zustand";

import fetcher from "@/lib/fetcher";
import { getSocket } from "@/lib/socket";

import { ChatType } from "@/types/types";

export interface ChatStore {
    chats: ChatType[];
    setChats: (chats: ChatType[]) => void;

    activeChat: ChatType | null;
    setActiveChat: (chat: ChatType | null) => void;

    loading: boolean;
    setLoading: (loading: boolean) => void;

    chatLoading: boolean;
    setChatLoading: (loading: boolean) => void;

    isTyping: boolean;
    setIsTyping: (isTyping: boolean) => void;
    fetchChats: () => Promise<void>;

    initOrLoadChat: (targetUserId: UUID) => Promise<void>;

    onlineUserIds: string[];
    setOnlineUserIds: (ids: string[]) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    chats: [],
    setChats: (chats) => set({ chats }),

    activeChat: null,
    setActiveChat: (activeChat) => set({ activeChat }),

    loading: true,
    setLoading: (loading) => set({ loading }),

    chatLoading: false,
    setChatLoading: (loading) => set({ loading }),

    isTyping: false,
    setIsTyping: (val) => set({ isTyping: val }),

    fetchChats: async () => {
        set({ loading: true });

        try {
            const res = await fetcher<{ chats: ChatType[] }>("/chat/get-user-chats");
            if (!res.ok) {
                if (res.message === "jwt expired") {
                    await fetcher<{ chats: ChatType[] }>("/auth/refresh-token", {
                        method: "POST"
                    });
                    await get().fetchChats();
                    return;
                }
                set({ chats: [] })
                return;
            }
            set({ chats: res.data.chats })
        } catch (error) {
            console.error(`Error during fetch user chats: ${error}`);
        } finally {
            set({ loading: false })
        }
    },
    initOrLoadChat: async (targetUserId) => {
        set({ chatLoading: true });

        try {
            const res = await fetcher<{ chat: ChatType }>(`/chat/init-or-get-chat?otherUserId=${targetUserId}`);

            if (!res.ok) {
                if (res.message === "jwt expired") {
                    await fetcher<{ chats: ChatType[] }>("/auth/refresh-token", {
                        method: "POST"
                    });
                    await get().initOrLoadChat(targetUserId);
                    return;
                }
                set({ activeChat: null })
                return;
            }

            const socket = getSocket();
            if (socket) {
                socket.emit("init-or-load-chat", { targetUserId });
            }

            set({ activeChat: res.data.chat })
        } catch (error) {
            console.error(`Error during fetch user chats: ${error}`);
        } finally {
            set({ chatLoading: false })
        }
    },

    onlineUserIds: [],
    setOnlineUserIds: (ids) => set({ onlineUserIds: ids })
}))