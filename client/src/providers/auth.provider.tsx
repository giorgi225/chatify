"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ChatStore, useChatStore } from "@/store/chat.store";

import fetcher from "@/lib/fetcher";
import { GetSessionType } from "@/lib/session";
import { disconnectSocket, getSocket, initSocket } from "@/lib/socket";

import { ChatType, UserType } from "@/types/types";

interface AuthContextProps {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  refreshToken: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: GetSessionType;
}) => {
  const router = useRouter();
  const { setIsTyping, setOnlineUserIds } = useChatStore();
  const [user, setUser] = useState<UserType | null>(session && session.user);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(!!session?.refresh);
  const [socketReady, setSocketReady] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await fetcher<UserType>("/auth/refresh-token", {
        method: "POST",
      });
      if (!res.ok) {
        router.push("/auth/login");
        return;
      }
      await onInitSocket();
    } catch (error) {
      console.error(`Error whilre refreshing token: ` + error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const logout = async () => {
    try {
      await fetcher<UserType>("/auth/logout", {
        method: "POST",
      });
      router.push("/auth/login");
    } catch (error) {
      console.error(`Error whilre refreshing token: ` + error);
    }
  };

  const onInitSocket = async () => {
    const res = await fetcher<{ token: string }>("/auth/token", {
      method: "POST",
    });

    if (!res.ok) {
      throw "Unauthorized";
    }

    initSocket(res.data.token);
    setSocketReady(true);
  };

  useEffect(() => {
    const setup = async () => {
      if (!session) return;

      if (session.refresh) {
        await refreshToken();
      }

      await onInitSocket();
    };

    setup();
  }, [refreshToken, session]);

  useEffect(() => {
    if (!session || !socketReady) return;

    const socket = getSocket();

    if (!socket) {
      console.log("No Socket");

      return;
    }

    const onNewMessage = (data: { chat: ChatType; sound?: boolean }) => {
      if (!data.chat) return;

      setIsTyping(false);
      // 🔊 Play sound
      if (data.sound) {
        const audio = new Audio("/sounds/message-sound.mp3");
        audio.play().catch((err) => console.error("Sound play error:", err));
      }

      useChatStore.setState(({ activeChat, chats }) => {
        const chatExists = chats.some((chat) => chat.id === data.chat?.id);
        const newMessage = data.chat.message[0];

        const updates: Partial<ChatStore> = {};

        updates.chats = chatExists
          ? [
              { ...data.chat, message: [newMessage] }, // updated chat first
              ...chats.filter((chat) => chat.id !== data.chat.id), // remove old instance
            ]
          : [data.chat, ...chats];

        if (activeChat?.id === data.chat?.id) {
          updates.activeChat = {
            ...activeChat,
            message: [...activeChat.message, newMessage],
          };
        }

        return updates;
      });
    };

    const onChatLoad = (data: { chat: ChatType }) => {
      if (!data.chat) return;

      useChatStore.setState(({ chats }) => {
        const chatExists = chats.find((chat) => chat.id === data.chat?.id);

        const updates: Partial<ChatStore> = {};
        if (!chatExists) {
          updates.chats = [data.chat, ...chats];
        }

        return updates;
      });
    };

    const onUserTyping = () => {
      setIsTyping(true);
    };

    const onUserStoppedTyping = () => {
      setIsTyping(false);
    };

    socket.on("new-message", onNewMessage);
    socket.on("chat-loaded", onChatLoad);
    socket.on("user-typing", onUserTyping);
    socket.on("user-stopped-typing", onUserStoppedTyping);

    socket.on(
      "online-users",
      ({ onlineUsersIds }: { onlineUsersIds: string[] }) => {
        setOnlineUserIds(onlineUsersIds);
      }
    );

    return () => {
      socket.off("new-message", onNewMessage);
      socket.off("chat-loaded", onChatLoad);
      socket.off("user-typing", onUserTyping);
      socket.off("user-stopped-typing", onUserStoppedTyping);
      disconnectSocket();
      setSocketReady(false)
    };
  }, [session, socketReady]);

  // Block rendering until refresh is done
  if (isRefreshing) return null;

  return (
    <AuthContext.Provider value={{ user, setUser, refreshToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useSession must be used inside AuthProvider");
  return context;
};
