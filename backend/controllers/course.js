import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";
import { createError } from "../util/errors.js";


export const addCourse = async (req, res, next) => {
    const newCourse = new Course({ owner: req.user.id, ...req.body });
    try {
        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse);
    } catch (err) {
        next(err)
    }
}

// export const addLecture = async (req, res, next) => {
//     const course = await Course.findById(req.params.id)

// }


export const getCourse = async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (err) {
        next(err);
    }
};



