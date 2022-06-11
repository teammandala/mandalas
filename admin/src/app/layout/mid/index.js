import React from "react";
import Router from "../../routes";
import Header from "../header";

class Mid extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="mid">
          <Router />
        </div>
      </>
    );
  }
}

export default Mid;
