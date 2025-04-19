
import { cleanEnv, str } from "envalid";

const OAuthConfig = cleanEnv(process.env, {
    GOOGLE_CLIENT_ID: str(),
    GOOGLE_CLIENT_SECRET: str(),
    GOOGLE_CALLBACK_URL: str(),
});

export default OAuthConfig;