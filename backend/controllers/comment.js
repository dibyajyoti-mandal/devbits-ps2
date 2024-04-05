import { createError } from "../errors.js";
import { Comment } from "../models/comment.model.js"

export const addComment = async (req, res, next) => {
    const newComment = new Comment({ ...req.body, userId: req.user.id });
    try {
        const savedComment = await newComment.save();
        res.status(200).send(savedComment);
    } catch (err) {
        next(err);
    }
};


export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ courseId: req.params.courseId });
        res.status(200).json(comments);
    } catch (err) {
        next(err);
    }
};