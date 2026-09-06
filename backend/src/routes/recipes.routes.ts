import { Router } from "express";
import { getRecipes,createRecipe, deleteRecipe, getComments, createComment, deleteComment, getRecipesById } from "../controllers/recipes.controller";

const router = Router()

router.get('/recipes',getRecipes)
router.get('/recipes/:id',getRecipesById)
router.post('/recipes',createRecipe)
router.delete('/recipes/:id',deleteRecipe)
router.get('/recipes/:id/comments',getComments)
router.post('/recipes/:id/comments',createComment)
router.delete('/comments/:id',deleteComment)

export default router