import React from "react";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Navbar from "./Navbar";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8">
        <div className=" w-max items-center justify-center">
        <GoogleLoginButton onClick={ signIn }/>
        </div>
      </div>
    </div>
  );
};

export default Login;
