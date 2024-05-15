import express from "express";
import {enroll, getUser, test, unEnroll, updateUser} from "../controllers/user.js"
import { verifyToken } from "../util/verifyToken.js";

const router = express.Router()

router.get("/r", test)
router.get("/find/:id", getUser)
router.put("/:id", verifyToken, updateUser)
router.put("/enroll/:id", verifyToken, enroll)
router.put("/unenroll/:id", verifyToken, unEnroll)


export default router 