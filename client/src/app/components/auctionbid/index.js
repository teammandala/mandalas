import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auction from "../../api/auction";
import moment from "moment";
import Pagenotfound from "../../pages/pagenotfound";
import "./style.css";
import {Button, Form, Input} from 'antd'

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
      <div className="container-fluid auction-bid">
        <div className="row">
        <h4>{data.description}</h4>
        </div>
        <div className="row">
          <img
            className="bid-image"
            src={"http://localhost:8080/" + data.image}
            alt=""
          />
        <div className="bid row">
          <Form >
            <Form.Item
            label='amount'
            >
              <Input type='number' placeholder='enter amount'/>
              
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Bid
              </Button>
            </Form.Item>
          </Form>
            
          </div>
          <div>{data.bids}</div>
        
          

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
            <p>Sold by: <strong>{data.seller}</strong> </p> 
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiddingPage;
