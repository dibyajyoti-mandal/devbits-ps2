import {model, mongoose, Schema} from "mongoose"

const commentSchema=new Schema({
    userId:{
        Type: String,
        required: true
    },
    courseId:{
        Type: String,
        required: true
    },
    content:{
        Type: String,
        required: true
    },
    likes:{
        Type: Number,
        default: 0,
    }
})

export const Model = model("Comment", commentSchema); 