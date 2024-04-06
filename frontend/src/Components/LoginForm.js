import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginForm=({setisLoggedin})=>
{
    // console.log("inside login form");
    const [formData, setFormData]= useState({
        email:"",password:""
    })
    
    // const Navigate= useNavigate();

    const [ShowPassword, setShowPassword]=useState("password")

    function changeHandler(event){
     
        setFormData((prev)=>{
            return{
                ...prev,[event.target.name]:event.target.value
            }
        })

    }

    function submitHandler(event){
        
        event.preventDefault();
        setisLoggedin(true);
        toast.success("logged in successfully");
        // Navigate("/dashboard");
        

    }
    return(
        <form className="flex flex-col w-full gap-y-4 mt-6 "    onSubmit={submitHandler}>
         
         <label className="w-full text-richblack-5 mb-1 leading-[1.375rem]" >E-mail Address<sub className="text-pink-200">*</sub></label>


         <input type="email" name="email"  required value={formData.email} onChange={changeHandler} placeholder="Enter your email"  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]   "></input>
     
         
         
         <label  className="w-full text-richblack-5 mb-1 leading-[1.375rem]">Password<sub className="text-pink-200">*</sub>  </label>
         <div className="relative ">
         <input className="bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]   "   type={ShowPassword === "password" ? ("password"):("text") } name="password"  required value={formData.password} placeholder="Enter your password" onChange={changeHandler}></input>
        
        <span className="absolute right-3 top-[20px] cursor-pointer">{ShowPassword === "password" ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" onClick={()=>{
                setShowPassword("text");
            }}></AiOutlineEye>
        ):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" onClick={()=>{
            setShowPassword("password")
        }} ></AiOutlineEyeInvisible >)} </span>

         </div>
       

        <Link to="#">
            <p className="text-xs mt-1 text-blue-100 ml-auto w-full max-w-max  ">Forget Password</p>
        </Link>

        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] ">Sign in</button>
        </form>
    )
}

export default LoginForm;