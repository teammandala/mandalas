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
import KYC from "../pages/kyc";
import Auctioneer from "../pages/auctioneer";
import Termsandconditions from "../pages/termsandconditions";
import Policy from "../pages/policy";
import Auctionrequest from "../pages/auctionrequest";

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
          <Route path="/profile/:username" element={<Profilepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/auctioneer" element={<Auctioneer />} />
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/termsandconditions" element={<Termsandconditions />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path='/auctionrequest' element={<Auctionrequest />} />
          
        </Routes>
      </>
    );
  }
}

export default Router;
