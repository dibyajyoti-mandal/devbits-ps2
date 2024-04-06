import React from "react";
import FrameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

const Template=({title, desc1,desc2,image,formtype,setisLoggedin})=>{

  //  console.log("my form type is ");
  //  console.log(formtype);

    return (
        <div className="flex justify-between   w-10/12 max-w-[1160px] py-12 mx-auto  gap-x-12 pt-[100px]">
          <div>
          <div className="w-11/12 max-w-[450px]">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] ">{title}</h1>
          </div>
          <p className="text-[1.125rem] leading-[1.625rem] mt-4   ">
            <span className="text-richblack-100 ">{desc1}</span>
            <br></br>
            <span className="text-blue-100 italic  ">{desc2}</span>
          </p>
          <div>
          {
            formtype === "login" ? (<LoginForm setisLoggedin={setisLoggedin}  />):(<SignupForm setisLoggedin={setisLoggedin} />)
          }
         </div>

         <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] bg-richblack-700   w-full" ></div>
            {/* <p className="text-richblack-700 font-medium leading-[1.375rem] ">OR</p> */}
            <div className="h-[1px] bg-richblack-700 w-full" ></div>
         </div >

         
         
         </div>

         <div className="relative w-11/12 max-w-[450px]  ">
            <img  className="absolute z-[2px]  top-4 left-4 " src={FrameImage} width={558} height={504} loading="lazy"></img>
            <img  className="absolute z-[20px]  "src={image} width={558} height={490} loading="lazy" ></img>
         </div>
          

        </div>
    )
}


export default Template;