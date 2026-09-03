import { Router } from "express";
import { getRecipes } from "../controllers/recipes.controller";

const router = Router()

router.get('/recipes',getRecipes)

export default router