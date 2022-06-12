import React from "react";
// import { Link } from 'react-router-dom';
import LoginForm from "../../components/form/login";
import "./style.css";

function Login() {
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img
              src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
              alt="Login"
            />
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
