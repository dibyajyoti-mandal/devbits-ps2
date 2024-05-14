import express from "express";
import { addComment, getComments } from "../controllers/comment.js";
import { verifyToken } from "../util/verifyToken.js";

const router = express.Router()

router.post("/", verifyToken, addComment)
router.get("/:courseId", getComments)


export default router