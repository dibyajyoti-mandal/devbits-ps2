import { Schema, model } from "mongoose";
import {Course} from "./course.model.js";

const userSchema = new Schema({
    fullName: {
        type: 'String',
        required: [true, 'Name is required'],
        maxLength: [50, 'Name should be less then 50 character '],
        lowercase: true,
        trim: true,
    },
    email: {
        type: 'String',
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: 'String',
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be 8 charchter'],
        select: false
    },
    role: {
        type: 'String',
        enum: ['Student', 'Teacher'],
        default: 'Student'
    },
    courses:[
        {
            type: Schema.Types.ObjectId,
            ref : Course,
        }
    ],
}, {
    timestamps: true
});
export const User = model('User', userSchema);
