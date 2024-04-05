import express from "express";
import {test} from "../controllers/lecture.js"

const router = express.Router()

router.get("/r", test)



export default router 