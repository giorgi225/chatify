import { cleanEnv, port, url } from "envalid";

const appConfig = cleanEnv(process.env, {
    FRONTEND_URL: url(),
    BACKEND_URL: url(),
    PORT: port({ default: 8000 }), // this for Render support
});

export default appConfig;