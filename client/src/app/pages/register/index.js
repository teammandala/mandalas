import React from "react";
// import { Link } from 'react-router-dom';
import RegisterForm from "../../components/form/register";
import "./style.css";

function Register() {
  return (
    <>
      <div className="signup-page">
        <div className="signup-box">
          <div className="illustration-wrapper">
            <img
              src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
              alt="Login"
            />
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default Register;
