import express from "express";
import {getUser, test, updateUser} from "../controllers/user.js"
import { verifyToken } from "../util/verifyToken.js";

const router = express.Router()

router.get("/r", test)
router.get("/find/:id", getUser)
router.put("/:id", verifyToken, updateUser)


export default router 