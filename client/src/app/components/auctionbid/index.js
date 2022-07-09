import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auction from "../../api/auction";
import moment from "moment";
import bidding from "../../api/bidding";
import user from "../../api/user";
import "./style.css";
import { Button, Form, Input } from "antd";
import Bidsdata from "../bidsdata";
import Timer from "./timer";
import { Last } from "react-bootstrap/esm/PageItem";

const BiddingPage = () => {
  const [data, setData] = useState([]);
  const [seller, setSeller] = useState("");
  const [bid, setBid] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);
  const id = useParams().id;
  const [isUser, setIsUser] = useState(false);
  const [justEnded, setJustEnded] = useState(false);

  const update = () => {
    setJustEnded(true);
  };

  useEffect(() => {
    auction
      .getCurrentAuction(id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
        setSeller(data.seller.username);
      })
      .catch((error) => {
        console.log(error);
      });

    const cuser = user.getCurrentUser();

    if (cuser) {
      setCurrentUser(cuser);
    }
    if (cuser) {
      setCurrentUser(cuser);
      setIsUser(cuser);
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

  const currentDate = new Date();
  const minBid =
    data.bids && data.bids.length > 0 ? data.bids[0].bid : data.startingBid;

  return (
    <>
      <div className="container-fluid auction-bid">
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <h1>Product Name: {data.itemName}</h1>
            </div>
            <div className="col">
              <h2>Starting Price: {data.startingBid}</h2>
            </div>
            <div className="col">
              <h3>
                Started: {moment(data.bidStart).format("DD-MM-YYYY HH:MM")}
              </h3>
            </div>
            <div className="col">
              <h3>Ends At: {moment(data.bidEnd).format("DD-MM-YYYY HH:MM")}</h3>
            </div>
            <div className="row">
              <p>
                Sold by: <strong>{seller}</strong>
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
            {(() => {
              if (isUser) {
                if (
                  currentDate > new Date(data.bidStart) &&
                  currentDate < new Date(data.bidEnd)
                ) {
                  return (
                    <Form>
                      <Timer endTime={data.bidEnd} update={update} />
                      {data.bids.bid ? (
                        <p>{` Last bid: $ ${data.bids[0].bid}`}</p>
                      ) : (
                        <p>{` Starting bid: $ ${data.startingBid}`}</p>
                      )}
                      <Form.Item label="amount">
                        <Input
                          type="number"
                          placeholder="Your Bid ($)"
                          value={bid}
                          onChange={onChangeBid}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          onClick={handleBid}
                          htmlType="submit"
                          disabled={bid < minBid + 1}
                        >
                          Place Bid
                        </Button>
                      </Form.Item>
                    </Form>
                  );
                } else {
                  return <h4 className="closed">Bidding is closed</h4>;
                }
              } else {
                return (
                  <div className="notlogined row">
                    <h4>You are not logged in!!! Please login to bid</h4>
                    <Button type="primary" href="/login" block>
                      Login
                    </Button>
                  </div>
                );
              }
            })()}
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
