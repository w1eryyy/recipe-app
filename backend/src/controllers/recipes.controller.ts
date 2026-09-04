import { error } from "node:console";
import pool from "../db";
import { Response, Request } from "express";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM recipes');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server recipes get error' });
  }
};

export const createRecipe = async (req: Request, res: Response) => {
  try {
    let { title, author, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "title or content cant be empty" });
    }
    if (!author) author = 'unknown';
    const result = await pool.query('INSERT INTO recipes (title, author, content) VALUES ($1, $2, $3) RETURNING *', [title, author, content]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server recipes post error' });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM recipes WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "pecipe was not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server recipes delete error' });
  }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM comments WHERE recipe_id = $1', [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server comments get error" });
  }
};

export const createComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let { author, content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "content cant be empty" });
    }
    if (!author) author = 'unknown';
    const result = await pool.query('INSERT INTO comments (recipe_id,author,content) VALUES ($1, $2, $3) RETURNING *', [id, author, content]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server comments create error" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "comments was not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server recipe delete error" });
  }
};