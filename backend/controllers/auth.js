import mongoose from "mongoose";
import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../errors.js";
import jwt from "jsonwebtoken";

export const signUpUser = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body,password:hash})
        await newUser.save();
        console.log(newUser)
        res.status(200).send("user created")
    }catch(err){
        next(err)
    }
}

export const loginUser = async (req, res, next) => {
    try {
      const user = await User.findOne({ name: req.body.name });
      if (!user) return next(createError(404, "User not found!"));
  
      const isCorrect = await bcrypt.compare(req.body.password, user.password);
  
      if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    } catch (err) {
      next(err);
    }
  };
