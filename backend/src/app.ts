import express from "express";
import { Express } from "express";
import cors from "cors";
import recipesRouter from "./routes/recipes.routes"

const app:Express = express()

app.use(cors())

app.use('/api',recipesRouter)
app.use(express.json())

export default app