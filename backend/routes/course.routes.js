import express from "express";
import {test} from "../controllers/course.js"

const router = express.Router()

router.get("/r", test)


export default router 