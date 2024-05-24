import { Course } from "../models/course.model.js"
import { Lecture } from "../models/lecture.model.js"

export const addLecture = async (req, res, next) => {
    
    const newLec = new Lecture({...req.body, owner: req.user.id});
    try{
        const savedLec = await newLec.save();
        const course = 
        res.status(200).json(savedLec);
    }catch(err){
        next(err);
    }

}

export const getLectures = async (req,res,next)=>{
    try{
        const lectures  = await Lecture.find({courseId: req.params.courseId});
        res.status(200).json(lectures);
    }catch(err){
        next(err);
    }
}



// export const deleteLecture = async(req,res,next)=>{
//     try{
//         const lec = await 
//     }
// }
