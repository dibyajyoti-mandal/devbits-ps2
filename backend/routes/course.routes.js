import express from "express";
import { addCourse, getCourse } from "../controllers/course.js"
import { verifyToken } from "../util/verifyToken.js";

const router = express.Router()

router.post("/", verifyToken, addCourse)
router.get("/find/:id", getCourse)


export default router 