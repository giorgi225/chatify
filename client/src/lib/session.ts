import { cookies } from "next/headers"

import fetcher from "@/lib/fetcher";

import { UserType } from "@/types/types";

export type GetSessionType = {
    user: UserType | null;
    refresh?: true
} | null;

export default async function getSession(): Promise<GetSessionType> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!accessToken || !refreshToken) {
        return null;
    }

    try {
        const res = await fetcher<UserType>("/user/info", {
            headers: {
                Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
            }
        })
        
        if (!res.ok) {
            if (res.message === "jwt expired") {
                const res = await fetcher<UserType>("/auth/refresh-token", {
                    method: "POST",
                    headers: {
                        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
                    }
                });

                if (!res.ok) {
                    return null;
                }

                return {
                    user: res.data,
                    refresh: true
                }
            }

            return null;
        }

        return {
            user: res.data,
        }
    } catch (error) {
        console.error(`Error during getSession: ${error}`);
        return null;
    }
}