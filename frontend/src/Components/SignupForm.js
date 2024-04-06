import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = ({ setisLoggedin }) => {



//   const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", password: "", confirmPassword: ""
  })

  const [ShowPassword, setShowPassword] = useState("password");
  const [ShowConfirmPassword, setShowConfirmPassword] = useState("password");




  function changeHandler(event) {

    setFormData((prev) => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })

  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("password is not same!");
      return;
    }

    setisLoggedin(true);
    toast.success("account created !");
    // Navigate("/dashboard");

  }


  const [AccountType, setAccountType]= useState("student")

  return (
    <div>
      {/* student instructor tab  */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
        <button 
        onClick={()=>{
          setAccountType("student")
        }}
        className={`${AccountType==="student" ? ("bg-richblack-900 text-richblack-5"):("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`}>
          Student
          </button>
        <button
                onClick={()=>{
                  setAccountType("instructor")
                }}
        className={`${AccountType==="instructor" ? ("bg-richblack-900 text-richblack-5"):("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200 `}>
          Instructor
          </button>
      </div>

      <form  className="gap-y-[10px] "  onSubmit={submitHandler}>
        < div className="flex gap-4 gap-y-2 mt-2 mb-2 ">
        <label className="w-full text-richblack-5  leading-[1.375rem]">
          <p>First Name<sup className="text-pink-200">*</sup></p>
          <input
            required
            type="text"
            name="firstname"
            value={formData.firstname}
            placeholder="Amaan"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px] "
          />
        </label>

        <label className="w-full text-richblack-5 mb-1 leading-[1.375rem]">
          <p className="">Last Name<sup className="text-pink-200">*</sup></p>
          <input
            required
            type="text"
            name="lastname"
            value={formData.lastname}
            placeholder="Siddiqui"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px] "
          />
        </label>
        </div>

        <label className="w-full text-richblack-5  mb-1 leading-[1.375rem]">
          <p>Email<sup className="text-pink-200">*</sup></p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="amaan.siddiqui.cd.ece22@itbhu.ac.in"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px] "
          />    
        </label>

        <div className="relative flex gap-4 mt-5">

          <label className="w-full text-richblack-5 mb-1 leading-[1.375rem]">
            <p>Create Password<sup className="text-pink-200">*</sup></p>
            <input
              className="bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px] "
              required
              type={ShowPassword === "password" ? ("password") : ("text")}
              name="password"
              value={formData.password}
              placeholder="password"
              onChange={changeHandler}
            />
                <span>{ShowPassword === "password" ? (
              <AiOutlineEye
                fontSize={24} fill="#AFB2BF"
                className="absolute left-[185px] top-[35px] cursor-pointer"
                onClick={() => {
                  setShowPassword("text");
                }}></AiOutlineEye>
            ) : (<AiOutlineEyeInvisible
              fontSize={24} fill="#AFB2BF"
              className="absolute left-[185px] top-[35px] cursor-pointer"
              onClick={() => {
                setShowPassword("password")
              }} ></AiOutlineEyeInvisible>)} </span>
          </label>

          <label className="w-full text-richblack-5 mb-1 leading-[1.375rem] ">
            <p>Confirm Password<sup className="text-pink-200">*</sup></p>
            <input
              className="bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px] "
              required
              type={ShowConfirmPassword === "password" ? ("password"):("text")}
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={changeHandler}
            />
                <span>{ShowConfirmPassword === "password" ? (
              <AiOutlineEye
                fontSize={24} fill="#AFB2BF"
                className="absolute right-3 top-[35px] cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword("text");
                }}></AiOutlineEye>
            ) : (<AiOutlineEyeInvisible
              fontSize={24} fill="#AFB2BF"
              className="absolute right-3 top-[35px] cursor-pointer"
              onClick={() => {
                setShowConfirmPassword("password")
              }} ></AiOutlineEyeInvisible>)} </span>
          </label>
        </div>
         <button className="bg-yellow-50 w-full   mt-5 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] " >Create Account</button>
      </form>
    </div>
  )
}


export default SignupForm



