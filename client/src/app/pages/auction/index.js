import React from "react";
import AuctionApprovedCard from "../../components/auction/approvedAuctions";

class Auction extends React.Component {
  render() {
    return (
      <>
        <div className="Auction">
          <h1>here are list of auctions </h1>
          <AuctionApprovedCard />
        </div>
      </>
    );
  }
}

export default Auction;
