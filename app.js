import express from "express"
import "dotenv/config"
import { startDB } from "./src/config/database.js"

const app = express()
app.use(express.json())

const PORT = process.env.PORT


startDB().then(()=>{
   app.listen(PORT,()=>{
    console.log(`Se ha conectado en https://localhost:${PORT}`)
   })
})