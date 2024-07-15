import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB  from "./Database/config.js"
import router from "./Routers/UserRouter.js";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
    credentials:true
}))

connectDB();

app.use('/api',router)

app.get('/',(req,res)=>{
    res.status(200).send("CURD Opration")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on Port");
})

