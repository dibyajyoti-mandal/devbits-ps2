import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";
import { createError } from "../util/errors.js";

export const test = (req,res,next)=>{
    console.log("hello");
    res.status(200);
    return;
}

export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}

export const updateUser = async(req,res,next)=>{
    if(req.params.id===req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new: true}
        );
        res.status(200).json(updatedUser);
        }catch(err){
            next(err)
        }
    }else{
        return next(createError(403,"Cannot update"))
    }
        
}


export const enroll = async(req,res,next)=>{

    try{
        await User.findByIdAndUpdate(req.user.id,{
            $push:{courses: req.params.id},
        });
        res.status(200).json("Enrolled to course")
    }catch(err){
        next(err)
    }
}

export const unEnroll = async(req,res,next)=>{
    try{
        try{
            await User.findByIdAndUpdate(req.user.id,{
                $pull:{courses: req.params.id},
            });
            res.status(200).json("Un-enrolled")
        }catch(err){
            next(err)
        }
    }catch(err){
        next(err)
    }   
}


export const like = async(req,res,next)=>{
    try{    
        await Course.findByIdAndUpdate(req.params.id,{
            $inc: {likes: 1}
        })
        res.status(200).json("liked")
    }catch(err){
        next(err)
    }
}

