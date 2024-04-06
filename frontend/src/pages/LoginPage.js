import React from "react";
import Template from "../components/Template.js"
import loginImg from "../assets/login.png"

function LoginPage({setisLoggedin})
{
    return <div>

       <Template 
       title="Welcome Back"
       desc1="Build skills for today, tommorrow and beyond "
       desc2="Educate to future proof your career"
       image={loginImg}
       formtype="login"
       setisLoggedin={setisLoggedin}
       />
        
    </div>

}

export default LoginPage;