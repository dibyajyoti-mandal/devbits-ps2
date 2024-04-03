import { Schema, model } from "mongoose";

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
    avatar: {
        public_id: {
            type: 'String',
        },
        secure_url: {
            type: 'String'
        }
    },
    role: {
        type: 'String',
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date
}, {
    timestamps: true
});
const User =model('User', userSchema);

export default User;
