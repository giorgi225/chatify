
import { cleanEnv, str } from "envalid";

const OAuthConfig = cleanEnv(process.env, {
    GOOGLE_CLIENT_ID: str(),
    GOOGLE_CLIENT_SECRET: str(),
});

export default OAuthConfig;