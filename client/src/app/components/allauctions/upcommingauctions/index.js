import React, { useState, useEffect } from "react";
import "./style.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Row, Col, Button } from "antd";
import auction from "../../../api/auction";
import { Container } from "react-bootstrap";
import moment from 'moment'
const { Meta } = Card;

const Upcomingauctions = () => {
  const [data, setData] = useState([]);
  // const [approved, setApproved] = useState([]);

  useEffect(() => {
    auction
      .getApprovedAuctionData()
      .then((res) => {
        const data = res.data.auctionData;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const currentDate = new Date();

  return (
    <>
      <Container className="container-fluid">
        <Row>
          {data.map((items) => {
            if (items.status === "approved") {
              // Executes when condition1 is true
              if (currentDate < new Date(items.bidStart)) {
                return (
                  <div className="site-card-wrapper">
                    <Container>
                      <Row>
                        <Col lg>
                          <Card
                            className="auctions"
                            // bordered={false}
                            style={{
                              width: 350,
                            }}
                            cover={
                              <img
                                alt="auctionimg"
                                width={350}
                                height={200}
                                src={"http://localhost:8080/" + items.image}
                              />
                            }
                          >
                            <Meta
                              className="p-1"
                              title={"Product Name: " + items.itemName}
                              description={
                                "Starting price: " + items.startingBid
                              }
                            />
                            <p>Starts At: {moment(items.bidStart).format("DD/MM/YYYY")}</p>
                            <Button
                              type="primary"
                              block
                              href={`/auctionandbid/${items._id}`}
                            >
                             Know More
                            </Button>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              }
            }
          })}
        </Row>
      </Container>
    </>
  );
};

export default Upcomingauctions;
