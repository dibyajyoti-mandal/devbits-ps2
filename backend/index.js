import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./util/dbconnection.js"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import courseRoutes from './routes/course.routes.js'
import commentRoutes from "./routes/comments.routes.js"
import lectureRoutes from "./routes/lecture.routes.js"

const app=express()
dotenv.config()
app.use(express.json())
const port = process.env.PORT||3000;
await connectDB()
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/lecture", lectureRoutes);
app.use("/api/comment", commentRoutes);


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    console.log(err)
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

app.listen(port,()=>{
    console.log("Running on port", port);
})

