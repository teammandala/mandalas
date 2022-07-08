import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auction from "../../api/auction";
import moment from "moment";
import bidding from "../../api/bidding";
import user from "../../api/user";
import Pagenotfound from "../../pages/pagenotfound";
import "./style.css";
import { Button, Form, Input } from "antd";
import Bidsdata from "../bidsdata";

const BiddingPage = () => {
  const [data, setData] = useState([]);
  const [bid, setBid] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);
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

    const cuser = user.getCurrentUser();

    if (cuser) {
      setCurrentUser(cuser);
    }
  }, []);

  const onChangeBid = (e) => {
    const bid = e.target.value;
    setBid(bid);
  };

  const handleBid = (e) => {
    e.preventDefault();
    const bidder = currentUser._id;
    console.log(id, bidder, bid);
    bidding
      .bidUpdate(id, bidder, bid)
      .then((response) => {
        window.alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        // window.alert(err.data.message);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          window.alert(error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container-fluid auction-bid">
      <div className="container-fluid">
          <div className="row">
            <div className="row">
              <h1>Product Name: {data.itemName}</h1>
            </div>
            <div className="col">
              <h3>Last Updated: {data.updated}</h3>
            </div>
            <div className="col">
              <h2>Starting Price: {data.startingBid}</h2>
            </div>
            <div className="col">
              <h3>Started: {moment(data.bidStart).format("DD/MM/YYYY")}</h3>
            </div>
            <div className="col">
              <h3>Ends At: {moment(data.bidEnd).format("DD/MM/YYYY")}</h3>
            </div>
            <div className="row">
              <p>
                Sold by: <strong>{data.seller}</strong>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h4>{data.description}</h4>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="bid-image"
              src={"http://localhost:8080/" + data.image}
              alt=""
            />
          </div>

          <div className="bid row">
            <Form>
              <Form.Item label="amount">
                <Input
                  type="number"
                  placeholder="enter amount"
                  value={bid}
                  onChange={onChangeBid}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleBid} htmlType="submit">
                  Bid
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="Scroll row">
          <Bidsdata id={id} />
        </div>
        {/* <div>{data.bids}</div> */}

        
      </div>
    </>
  );
};

export default BiddingPage;
