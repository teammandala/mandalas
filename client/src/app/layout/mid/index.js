import React from "react";
import Router from "../../routes";
import Footer from "../footer";
import Navigationbar from "../navbar";

class Mid extends React.Component {
  render() {
    return (
      <>
        <div className="mid">
          <Navigationbar/>
          <Router />
          <Footer/>
        </div>
      </>
    );
  }
}

export default Mid;
