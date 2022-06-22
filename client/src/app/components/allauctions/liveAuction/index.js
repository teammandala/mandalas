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
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const Liveauctions = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  

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
              if (
                currentDate > new Date(items.bidStart) &&
                currentDate < new Date(items.bidEnd)
              ) {
                return (
                  <div className="site-card-wrapper">
                    <div className=" container-fluid">
                      <Col span={4}>
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
                          // actions={[
                          //   <SettingOutlined key="setting" />,
                          //   <EditOutlined key="edit" />,
                          //   <EllipsisOutlined key="ellipsis" />,
                          // ]}
                        >
                          <Meta
                            title={items.itemName}
                            description={items.startingBid}
                          />
                          <Button type='primary' block
                          href={"/auctionandbid/" + items._id}
                          >
                    Bid Now
                    </Button>
                        </Card>
                      </Col>
                    </div>
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

export default Liveauctions;
