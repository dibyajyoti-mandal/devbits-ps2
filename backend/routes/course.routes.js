import express from "express";
import { addCourse, getCourse, random } from "../controllers/course.js"
import { verifyToken } from "../util/verifyToken.js";


const router = express.Router()

router.post("/", verifyToken, addCourse)
router.get("/find/:id", getCourse)
router.get("/random", random)


export default router 