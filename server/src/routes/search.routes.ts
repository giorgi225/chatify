import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";
import searchController from "../controllers/search.controller";


const searchRoutes = Router();

searchRoutes.get("/users", [authMiddleware.authorize], searchController.searchUsers);

export default searchRoutes;