import React from "react";
import AuctionForm from "../../components/form/auction";
// import { Link } from 'react-router-dom';
import "./style.css";

function Auctioneer() {
  return (
    <>
      <div className="auctioneer-page">
        <div className="auctioneer-box">
          <div className="illustration-wrapper">
            <h1>Please Provide Right Information!</h1>
            <p>for the approval for the auction request</p>
          </div>
          <AuctionForm />
        </div>
      </div>
    </>
  );
}

export default Auctioneer;
