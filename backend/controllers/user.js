import { User } from "../models/user.model.js";

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


// export const update = async(req,res,next)=>{
//     if(req.params.id === req.user.id){
//         try{
//                 const updatedUser = 
//         }
//     }
// }