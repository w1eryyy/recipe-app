import express from "express";
import { Express } from "express";
import cors from "cors";
import recipesRouter from "./routes/recipes.routes"

const app:Express = express()

app.use(cors())


app.use(express.json())
app.use('/api',recipesRouter)

export default app