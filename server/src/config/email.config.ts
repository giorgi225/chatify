import { bool, cleanEnv, num, port, str } from "envalid";

const emailConfig = cleanEnv(process.env, {
    EMAIL_HOST: str(),
    EMAIL_PORT: port(),
    EMAIL_SECURE: bool(),
    EMAIL_USER: str(),
    EMAIL_PASS: str(),
    EMAIL_VERIFICATION_EXPIRES_IN: str(),
    // email verification code
    EMAIL_VERIFICATION_MAX_ATTEMPTS: num(),
    EMAIL_VERIFICATION_COOLDOWN: str(),
    // reset verification code
});

export default emailConfig;