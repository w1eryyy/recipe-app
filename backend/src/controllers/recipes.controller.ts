import pool from "../db";
import { Response, Request } from "express";

export const getRecipes = async(req:Request,res:Response) =>{
  try{
    const result = await pool.query('SELECT * FROM recipes')
    res.json(result.rows)
  } catch (error){
    res.status(500).json(error)
  }
}