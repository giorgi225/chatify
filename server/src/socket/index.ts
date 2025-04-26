import { UUID } from "crypto";
import { Server as SocketIOServer } from "socket.io";
import authMiddleware from "../middleware/auth.middleware";
import { AuthorizedSocketRequest, UserType } from "../types/types";
import { ChatSocketHandler } from "./chat.events";

class SocketService {
    private static instance: SocketService
    private io!: SocketIOServer;
    private connectedUsers: Map<UUID, string> = new Map();

    private constructor() {

    }

    public static getInstance(): SocketService {
        if (!SocketService.instance) {
            SocketService.instance = new SocketService();
        }
        return SocketService.instance;
    }

    public init(io: SocketIOServer) {
        this.io = io;
        this.io.use((socket, next) => authMiddleware.authorizeSocket(socket, next));

        this.io.on("connection", (socket: AuthorizedSocketRequest) => {
            const user = socket.user as UserType;
            this.connectedUsers.set(user.id, socket.id);
            console.log(`connected with socket id: ${socket.id}`);

            new ChatSocketHandler(socket);

            socket.on("disconnect", () => {
                this.connectedUsers.delete(user.id);
                this.io.emit("online-users", { onlineUsersIds: Array.from(this.connectedUsers.keys()) });
            });
        })
    }

    public getIO(): SocketIOServer {
        if (!this.io) throw new Error("Socket.io not initialized yet.");
        return this.io;
    }

    public getConnectedUsers(): Map<UUID, string> {
        return this.connectedUsers;
    }

}
const socketService = SocketService.getInstance()
export default socketService