import app from "./app";
import pool from "./db";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT

async function startServer(){
  try{
    await pool.query("SELECT 1")
    console.log("DATA BASE WAS CREATED")

    app.listen(PORT,()=>{
      console.log(`http://localhost:${PORT}/api`)
    })

  } catch (error){
    console.error(error)
    process.exit(1)
  }
}

startServer()