import express from "express";
import {getUser, test} from "../controllers/user.js"

const router = express.Router()

router.get("/r", test)
router.get("/find/:id", getUser)


export default router 