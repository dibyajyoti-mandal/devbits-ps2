import {Schema, model} from "mongoose";

const lectureSchema = new Schema(
  {
    title:{
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    thumbnail:{
        type:String,
        required: true,
    },
    videoUrl:{
        type:String,
        required: true,
    },
    owner:{
        type: String,
        required: true,
    },
    courseId:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export const Lecture = model('Lecture', lectureSchema);