import {model, mongoose, Schema} from "mongoose"

const commentSchema=new Schema({
    userId:{
        type: String,
        required: true
    },
    courseId:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
        default: 0,
    }
})

export const Model = model("Comment", commentSchema); 