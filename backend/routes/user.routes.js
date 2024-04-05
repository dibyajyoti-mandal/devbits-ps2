import express from "express";
import {test} from "../controllers/user.js"

const router = express.Router()

router.get("/r", test)


export default router 