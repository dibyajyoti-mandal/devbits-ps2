import express from "express";
import { addLecture, getLectures } from "../controllers/lecture.js";
import { verifyToken } from "../util/verifyToken.js";

const router = express.Router()

router.post("/",verifyToken, addLecture)
router.get("/:courseId", getLectures)


export default router 