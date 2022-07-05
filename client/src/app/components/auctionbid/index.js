import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auction from "../../api/auction";
import moment from "moment";
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
    <>
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
          {data.itemName}
          <br />
          {data.updated}
          {moment(data.bidStart).format("DD/MM/YYYY")}
          {moment(data.bidEnd).format("DD/MM/YYYY")}
          {data.seller}
          {data.startingBid}
        </div>
        <div>{data.bids}</div>
      </div>
    </>
  );
};

export default BiddingPage;
