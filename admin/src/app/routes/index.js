import React from "react";
import { Routes, Route } from "react-router-dom";
import Auction from "../pages/auction";
import Contact from "../pages/contact";
import Home from "../pages/home";
import User from "../pages/users";
import Kycrequest from "../pages/kycrequest";
import Carouseldetails from "../pages/carousel";
// import Login from "../pages/login";
import Noaccess from "../pages/noaccess";
import AuctionRequest from "../pages/auctionRequest";
class Router extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/contactrequest" element={<Contact />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/kycrequest" element={<Kycrequest />} />
          <Route path="/carousel" element={<Carouseldetails />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/noaccess" element={<Noaccess />} />
          <Route path="/auctionrequest" element={<AuctionRequest />} />
        </Routes>
      </>
    );
  }
}

export default Router;
