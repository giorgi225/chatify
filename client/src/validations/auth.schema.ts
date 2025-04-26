import { z } from "zod";

const register = z.object({
    firstname: z.string()
        .min(2, "Firstname must be at least 2 characters long.")
        .max(50, "Firstname must be no longer than 50 charcters.")
        .regex(/^[A-Za-zÀ-ÿ\s-]+$/, "Firstname can only contain letters, spaces and hyphens."),
    lastname: z.string()
        .min(2, "Lastname must be at least 2 characters long.")
        .max(50, "Lastname must be no longer than 50 charcters.")
        .regex(/^[A-Za-zÀ-ÿ\s-]+$/, "Firstname can only contain letters, spaces and hyphens."),
    email: z.string().email("Invalid email format."),
    password: z.string().min(8, "Password must be at least 8 characters long."),
    password_confirmation: z.string({ required_error: "Password confirmation is required." }).min(1, "Password confirmation is required"),
    token: z.string().length(64).optional(), // invitation token
}).superRefine((data, ctx) => {
    if (data.password !== data.password_confirmation) {
        ctx.addIssue({
            path: ["password_confirmation"],
            message: "Password confirmation does not match.",
            code: "custom"
        })
    }
})

const login = z.object({
    email: z.string().email("Invalid email format."),
    password: z.string().min(8, "Password must be at least 8 characters long."),
})

const verifyEmail = z.object({
    email: z.string().email("Invalid email format."),
    code: z
        .string()
        .regex(/^\d{6}$/, "Code must be a 6-digit number."),
});

const sendEmailVerification = z.object({
    email: z.string().email("Invalid email format.")
})

const forgotPassword = z.object({
    step1: z.object({
        email: z.string().email("Invalid email format."),
    }),
    step2: z.object({
        code: z
            .string()
            .regex(/^\d{6}$/, "Code must be a 6-digit number."),
        password: z.string().min(8, "Password must be at least 8 characters long."),
        password_confirmation: z.string({ required_error: "Password confirmation is required." }).min(1, "Password confirmation is required"),
    }).superRefine((data, ctx) => {
        if (data.password !== data.password_confirmation) {
            ctx.addIssue({
                path: ["password_confirmation"],
                message: "Password confirmation does not match.",
                code: "custom"
            })
        }
    })
})

const authSchema = {
    register,
    login,
    verifyEmail,
    sendEmailVerification,
    forgotPassword
}

export default authSchema