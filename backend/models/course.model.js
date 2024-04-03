import {model , Schema} from "mongoose";

const courseSchema = new Schema({
    title:{
        type:String,
        required:[true, "Title is required" ],
        minLength:[8, "Title must be atleast 8 characters"],
        maxLength:[60,"Title should be less than 60 characters"],
        trim:true
    },
    description:{
        type: String,
        required:[true, "Description is required" ],
        minLength:[8, "Description must be atleast 8 characters"],
        maxLength:[200,"Description should be less than 200 characters"],
        trim:true
    },
    category:{
        type:String,
        required:[true, "Category is required" ],
    },
    thumbnail:{
        public_id:{
            type:String,
            required:true,
        },
        secure_url:{
            type:String,
            required:true,
        }
    },
    lectures:[
        {
            title:String,
            description:{
                type: String,
                maxLength:400,
                minLength:5,
            },
            lecture:{
                public_id:{
                    type:String,
                    required:true,
                },
                secure_url:{
                    type:String,
                    required:true,
                }
            }
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }

},{
    timestamps:true
})

export const Course = model('Course', courseSchema);
