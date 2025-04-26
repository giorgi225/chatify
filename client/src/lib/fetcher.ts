import { ResponseCodeType } from "@/types/types";

export type BackendResponse<T = unknown> =
    | {
        ok: true;
        code: "success";
        message: string;
        data: T;
    }
    | {
        ok: false;
        code: Exclude<ResponseCodeType, "success">;
        message: string;
        errors?: Record<string, string[]> | null;
    };

export default async function fetcher<T = unknown>(
    path: string,
    options: RequestInit = {}
): Promise<BackendResponse<T>> {
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            credentials: "include"
        });
        
        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            return data as BackendResponse<T>;
        } else {
            return {
                ok: false,
                message: "Response is not valid JSON",
                code: "server-error",
            };
        }
    } catch (error) {
        return {
            ok: false,
            message: `Error during fetch: ${error}`,
            code: "server-error",
        };
    }
}