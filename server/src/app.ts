import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { SocketServer } from "./socket";
import appConfig from "./config/app.config";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import chatRoutes from "./routes/chat.routes";
import searchRoutes from "./routes/search.routes";

class App {
    private readonly app: Express;
    public server: http.Server;
    public io: SocketIOServer

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);

        this.io = new SocketIOServer(this.server, {
            cors: {
                origin: appConfig.FRONTEND_URL,
                methods: ["GET", "POST"],
                credentials: true
            }
        })
        new SocketServer(this.io).registerHandlers();

        this.configureMiddleware();
        this.registerRoutes();
    }

    private configureMiddleware() {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(cors({
            origin: [appConfig.FRONTEND_URL],
            credentials: true
        }))
    }

    private registerRoutes() {
        this.app.use("/api/auth", authRoutes);
        this.app.use("/api/user", userRoutes);
        this.app.use("/api/chat", chatRoutes);
        this.app.use("/api/search", searchRoutes)
    }

    public async start(): Promise<void> {
        const { BACKEND_URL, PORT } = appConfig;

        this.server.listen(PORT, () => {
            console.log(`🚀 Server running at ${BACKEND_URL}`);
        });
    }
}

const app = new App()
export default app;