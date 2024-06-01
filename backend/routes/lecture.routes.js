import express from "express";
import { addLecture, getLectureById, getLectures } from "../controllers/lecture.js";
import { verifyToken } from "../util/verifyToken.js";

const router = express.Router()

router.post("/",verifyToken, addLecture)
router.get("/:courseId", getLectures)
router.get("/find/:id", getLectureById)


export default router 