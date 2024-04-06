import React from "react";
import signupImg from "../assets/signup.png"
import Template from "../components/Template";

function Signup({setisLoggedin})
{
    // console.log("inside signup")
    return <div>

<Template 
       title="Join the millions learning to code from StudyNotion for free"
       desc1="Build skills for today, tommorrow and beyond "
       desc2="Educate to future proof your career"
       image={signupImg}
       formtype="signup"
       setisLoggedin={setisLoggedin}
       />
        
    </div>

}

export default Signup;