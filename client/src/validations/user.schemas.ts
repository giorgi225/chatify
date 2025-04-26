import { z } from "zod";

const inviteFriend = z.object({
    email: z.string().email("Invalid email format.")
})

const validateInvitation = z.object({
    token: z.string().length(64, "Invalid token length").regex(/^[a-f0-9]+$/, "Invalid token format"),
})

const userSchema = {
    inviteFriend,
    validateInvitation
}

export default userSchema