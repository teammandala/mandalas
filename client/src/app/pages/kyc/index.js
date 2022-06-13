import React from "react";
import KYCForm from "../../components/form/kyc";
// import { Link } from 'react-router-dom';
import "./style.css";

function KYC() {
  return (
    <>
      <div className="kyc-page">
        <div className="kyc-box">
          <div className="illustration-wrapper">
            <h1>Please Provide Right Information!</h1>
            <p>for the approval for the kyc request</p>
          </div>
          <KYCForm />
        </div>
      </div>
    </>
  );
}

export default KYC;
