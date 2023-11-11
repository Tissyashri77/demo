import React from "react";
import { useAuth } from "../common/context";
import QHLogo from "../assets/quantumhunts_logo.jpeg";
import "./styles/login.css";
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'

function Login() {
  const { googleSignin, fbSignin } = useAuth();
  return (
    <div className="login_hero">
      <div className="login_head">
        <img src={QHLogo} alt="qh" className="logo" />
        <h3 className="login_title">Signin Task</h3>
      </div>
      <div className="provider_btns">
        <GoogleLoginButton onClick={googleSignin} />
        <FacebookLoginButton onClick={fbSignin} />
      </div>
    </div>
  );
}

export default Login;
