import nodemailer, { Transporter } from "nodemailer";
import emailConfig from "../config/email.config";
import Mail from "nodemailer/lib/mailer";
import appConfig from "../config/app.config";

class EmailServices {
    private transporter: Transporter;

    constructor() {
        const { EMAIL_PORT, EMAIL_HOST, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS, } = emailConfig;
        this.transporter = nodemailer.createTransport({
            port: EMAIL_PORT,
            host: EMAIL_HOST,
            secure: EMAIL_SECURE,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        })
    }

    public async sendEmail({ to, subject, text, html }: Mail.Options): Promise<{ ok: boolean }> {
        try {
            await this.transporter.sendMail({
                from: emailConfig.EMAIL_USER,
                to,
                subject,
                text,
                html
            })

            return { ok: true };
        } catch (error) {
            console.error(`Failed to send email: ${error}`);
            return { ok: false };
        }
    }

    // Send email verification
    public async sendEmailVerification({ code, to, subject = "Email Verification" }: { code: string, to: string, subject?: string }): Promise<{ ok: boolean }> {

        try {
            const emailRes = await this.sendEmail({
                to,
                subject,
                text: "",
                html: `
                    code is ${code}
                    code will expire in ${emailConfig.EMAIL_VERIFICATION_EXPIRES_IN}
                `
            });
            return emailRes;
        } catch (error) {
            console.error(`Failed to send email verification: ${error}`);
            return { ok: false };
        }
    }

    // Send email invitation
    public async sendEmailInvitation({ inviterFullname, to, token }: { inviterFullname: string, to: string, token: string }): Promise<{ ok: boolean }> {
        try {
            const emailRes = await this.sendEmail({
                to,
                subject: "Chatify invitation",
                html: `
                <p><strong>${inviterFullname}</strong> has invited you to join Chatify.</p>
                <p>Click the link below to create your account and start chatting with ${inviterFullname} and others:</p>
                <p>
                  <a href="${appConfig.FRONTEND_URL}/auth/register?invitation=${token}" style="color: #4F46E5; text-decoration: underline;">
                    Join Chatify Now
                  </a>
                </p>
                <p>If you weren’t expecting this invitation, you can ignore this email.</p>
              `
            });
            return emailRes;
        } catch (error) {
            console.error(`Failed to send email invitation: ${error}`);
            return { ok: false };
        }
    }
}

const emailServices = new EmailServices();
export default emailServices;