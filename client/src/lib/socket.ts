// lib/socket.ts
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = (token?: string): Socket => {
    if (!socket || !token) {
        console.log(token);
        
        socket = io(process.env.NEXT_PUBLIC_BACKEND_URL, {
            auth: {
                token
            }
        });

        socket.on("connect", () => {
            console.log("✅ Socket connected with id:", socket?.id);
        });

        socket.on("disconnect", () => {
            console.log("❌ Socket disconnected");
        });
    }

    return socket;
};

export const getSocket = (): Socket | null => socket;

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};