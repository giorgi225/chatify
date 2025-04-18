import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";
import send from "../utils/response.utils";


function formatZodErrors(errors: ZodError["errors"]) {
    const formatted: { [key: string]: string[] } = {};

    for (const error of errors) {
        const field = error.path[error.path.length - 1]; // get the last key in path

        if (!field || typeof field !== "string") continue; // safety check

        if (!formatted[field]) {
            formatted[field] = [];
        }

        formatted[field].push(error.message);
    }

    return formatted;
}

class ValidateMiddleware {
    public body(schema: ZodSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse(req.body);
                next();
            } catch (error) {
                if (error instanceof ZodError) {
                    const formattedErrors = formatZodErrors(error.errors);
                    return send.validationError(res, formattedErrors);
                }
            }
        }
    }
    public query(schema: ZodSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse(req.query);
                next();
            } catch (error) {
                if (error instanceof ZodError) {
                    const errors = error.errors;
                    const formattedErrors: { [key: string]: string[] } = {};

                    errors.forEach((err) => {
                        if (formattedErrors[err.path[0]]) {
                            formattedErrors[err.path[0]].push(err.message)
                        } else {
                            formattedErrors[err.path[0]] = [err.message]
                        }
                    })

                    return send.validationError(res, formattedErrors)
                }
            }
        }
    }
}

const validate = new ValidateMiddleware();
export default validate;