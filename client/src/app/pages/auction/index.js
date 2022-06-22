import React from "react";
import Liveauctions from '../../components/allauctions/liveAuction'
import Pastauctions from '../../components/allauctions/pastAuction'
import Upcommingauctions from '../../components/allauctions/upcommingauctions';
const Auction = () => {
  return (
    <>
    <div>
      <h1>Live Auctions</h1>
    <Liveauctions />
  </div>
  <div>
    <h1>Future Auctions</h1>
  <Upcommingauctions />
</div>
<div>
  <h1>Past Auctions</h1>
<Pastauctions />
</div></>
    
  );
};

export default Auction;
