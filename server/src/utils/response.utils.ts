import { Response } from "express";

type CodeType = "validation-error" | "unauthorized" | "conflict" | "server-error" | "verify-email" | "not-found" | "success" | "too-many-requests";

class ResponseHandler {
    private error(res: Response, code: CodeType, errors: unknown, message: string, status: number) {
        res.status(status).json({
            ok: false,
            code,
            message,
            errors: errors
        })
        return;
    }

    public success(res: Response, data: unknown, message: string = "success") {
        res.status(200).json({
            ok: true,
            code: "success",
            message,
            data: data
        })
        return
    }

    public validationError(res: Response, errors: Record<string, string[]>) {
        return this.error(res, "validation-error", errors, "Validation Failed", 400);
    }

    public unauthorized(res: Response, errors: Record<string, string[]> | null = null, message = "Unauthorized", code: CodeType = "unauthorized") {
        return this.error(res, code, errors, message, 401);
    }

    public conflict(res: Response, errors: Record<string, string[]> | null = null, message: string = "Conflict") {
        return this.error(res, "conflict", errors, message, 409)
    }

    public serverError(res: Response, message: string = "Server error") {
        return this.error(res, "server-error", null, message, 500)
    }

    public notFound(res: Response, errors: Record<string, string[]>, message = "Not Found") {
        return this.error(res, "not-found", errors, message, 404);
    }

    public tooManyRequests(res: Response, errors: unknown = null, message = "Too many requests") {
        return this.error(res, "too-many-requests", errors, message, 429);
    }

}

const send = new ResponseHandler();
export default send