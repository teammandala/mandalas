import React from "react";
import { Routes, Route } from "react-router-dom";
import Auction from "../pages/auction";
import Contact from "../pages/contact";
import Home from "../pages/home";
import User from "../pages/users";

class Router extends React.Component {
  render() {
    return (
      <>
        <Routes>
        <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auction" element={<Auction />} />
        </Routes>
      </>
    );
  }
}

export default Router;
