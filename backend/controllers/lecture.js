import { Course } from "../models/course.model.js"
import { Lecture } from "../models/lecture.model.js"

export const addLecture = async (req, res, next) => {
    
    const newLecture = new Lecture({owner: req.user.id, ...req.body})
    try {
        const save = await newLecture.save();
        res.status(200).json(save);
        await Course.findByIdAndUpdate(req.params.id,{
            $push: {lectures: save}
        })

    }catch(err){
        next(err)
    }



}



// export const addCourse = async (req, res, next) => {
//     const newCourse = new Course({ owner: req.user.id, ...req.body });
//     try {
//         const savedCourse = await newCourse.save();
//         res.status(200).json(savedCourse);
//     } catch (err) {
//         next(err)
//     }
// }