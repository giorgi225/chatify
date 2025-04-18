import { Request, Response } from "express";
import { AuthorizedRequest } from "../types/types";
import { prisma } from "../lib/db";
import send from "../utils/response.utils";

class SearchController {
    public async searchUsers(req: Request, res: Response) {
        const id = (req as AuthorizedRequest).userId;
        const { query } = req.query;

        if (!query || typeof query !== "string") {
            return send.validationError(res, {
                query: ["Please send a valid search query"],
            });
        }

        const q = query.trim();

        try {
            const users = await prisma.user.findMany({
                where: {
                    NOT: { id: id },
                    OR: [
                        { firstname: { contains: q } },
                        { lastname: { contains: q } },
                        { email: { contains: q } },
                        {
                            // Combine firstname + lastname to match joined search like "gigi shala" or "gigishala"
                            AND: [
                                {
                                    firstname: {
                                        contains: q.split(" ")[0],
                                    },
                                },
                                {
                                    lastname: {
                                        contains: q.split(" ")[1] || "",
                                    },
                                },
                            ],
                        },
                    ],
                },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                },
                take: 10,
            });

            return send.success(res, { users });
        } catch (error) {
            console.error("🔍 Search error:", error);
            return send.serverError(res);
        }
    }
}

const searchController = new SearchController;
export default searchController;