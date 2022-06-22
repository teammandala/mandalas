import React from "react";
import { Divider } from "antd";

import Liveauctions from "../../components/allauctions/liveAuction";
import Pastauctions from "../../components/allauctions/pastAuction";
import Upcomingauctions from "../../components/allauctions/upcommingauctions";
const Auction = () => {
  return (
    <div>
      <Divider>
        <h1>Ongoing Auctions</h1>
      </Divider>
      <Liveauctions />
      <Divider>
        <h1>Upcoming Auctions</h1>
      </Divider>
      <Upcomingauctions />
      <Divider>
        <h1>Past Auctions</h1>
      </Divider>
      <Pastauctions />
    </div>
  );
};

export default Auction;
