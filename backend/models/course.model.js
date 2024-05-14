import { model, Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [8, "Title must be atleast 8 characters"],
        maxLength: [60, "Title should be less than 60 characters"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [8, "Description must be atleast 8 characters"],
        maxLength: [200, "Description should be less than 200 characters"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    thumbnail:{
        type:String,
        default: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
        required: true,
    },
    lectures: [
        {
            type: Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes:{
        type: Number,
        default:0,
    }

}, {
    timestamps: true
})

export const Course = model('Course', courseSchema);
