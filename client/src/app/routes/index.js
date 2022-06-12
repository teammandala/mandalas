import React from "react";
import { Routes, Route } from "react-router-dom";
import Auction from "../pages/auction";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Loginpage from "../pages/login";
import Profilepage from "../pages/profile";
import Signuppage from "../pages/register";
import About from "../pages/about";
import Pagenotfound from "../pages/pagenotfound";
class Router extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </>
    );
  }
}

export default Router;
