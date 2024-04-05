import {mongoose, Schema} from "mongoose"

const commentSchema=new mongoose.Schema({
    userId:{
        Type: String,
        required: true
    },
    lectureId:{
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

export default mongoose.model("Comment", commentSchema); 