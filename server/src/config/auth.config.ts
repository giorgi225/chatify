import { cleanEnv, str } from "envalid";

const authConfig = cleanEnv(process.env, {
    ACCESS_SECRET: str(),
    ACCESS_SECRET_EXPIRES_IN: str(),
    REFRESH_SECRET: str(),
    REFRESH_SECRET_EXPIRES_IN: str(),
});

export default authConfig;