import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./util/dbconnection.js"

const app=express()
dotenv.config()

const port = process.env.PORT||3000;
connectDB()


app.listen(port,()=>{
    console.log("Running on port", port);
})

