import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auction from "../../api/auction";
import Pagenotfound from "../../pages/pagenotfound";
import "./style.css";

const BiddingPage = () => {
  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    auction
      .getCurrentAuction(id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <h1>auctions bid</h1>
        <h2>{data.description}</h2>
        <div>
          <img
            className="bid-image"
            src={"http://localhost:8080/" + data.image}
            alt=""
          />
        </div>
        <div className="container-fluid">
          <>
            Item Name {}: {}{" "}
          </>
          {data.itemName}
          <br />
          <>
            Updated {}: {}{" "}
          </>
          {data.updated}
          <br />
          <>
            Starting Date {}: {}{" "}
          </>
          {data.bidStart}
          <br />
          <>
            Ending Date {}: {}{" "}
          </>
          {data.bidEnd}
          <br />
          <>
            Seller Name {}: {}{" "}
          </>
          {data.seller}
          <br />
          <>
            Starting Price {}: {}{" "}
          </>
          {data.startingBid}
        </div>
        <div>{data.bids}</div>
      </div>
      <div className="col-md-6">
        <h>sdhjjhds</h>
        <h6>sdjksj jkskj</h6>
      </div>
    </div>
  );
};

export default BiddingPage;
