import {mongoose,Schema} from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    title:{
        type: String,
        required: [true, "Title is required"],
        minLength: [8, "Title must be atleast 8 characters"],
        maxLength: [60, "Title should be less than 60 characters"],
        trim: true
    },
    desc:{
        type: String,
        required: [true, "Description is required"],
        minLength: [8, "Description must be atleast 8 characters"],
        maxLength: [200, "Description should be less than 200 characters"],
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
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lecture", lectureSchema);