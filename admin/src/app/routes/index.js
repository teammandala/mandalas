import React from "react";
import { Routes, Route } from "react-router-dom";
import Auction from "../pages/auction";
import Contact from "../pages/contact";
import Home from "../pages/home";
import User from "../pages/users";
import Kycrequest from "../pages/kycrequest";
import Carouseldetails from "../pages/carousel";
import Login from "../pages/login";
import Noaccess from '../pages/noaccess'
class Router extends React.Component {
  render() {
    return (
      <>
        <Routes>
        <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/kycrequest" element={<Kycrequest />} />
          <Route path="/carousel" element={<Carouseldetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/noaccess" element={<Noaccess />}/>

          
        </Routes>
      </>
    );
  }
}

export default Router;
