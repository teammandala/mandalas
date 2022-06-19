import React, { useState, useEffect } from "react";
// import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import auction from "../../../api/auction";

const { Meta } = Card;

const AuctionApprovedCard = () => {
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

  return (
    <>
      {data.map((items) => {
        return (
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="auctionimg"
                      width={200}
                      src={"http://localhost:8080/" + items.image}
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    title={items.itemName}
                    description={items.startingBid}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        );
      })}
      {/* {data.map((items) => {
        if (items.status === "approved") {
          return (
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    bordered={false}
                    style={{
                      width: 300,
                    }}
                    cover={
                      <img
                        alt="auctionimg"
                        width={200}
                        src={"http://localhost:8080/" + items.image}
                      />
                    }
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Meta
                      title={items.itemName}
                      description={items.startingBid}
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          );setIsAdmin(user.role === "ADMIN");
      setIsAuctioneer(user.role === "AUCTIONEER");
      setIsUser(user.role === "USER");
    }
        } else {
          return (
            <>
              <p>no auctions are avialiable</p>
            </>
          );
        }
      })()} */}
    </>
  );
};

export default AuctionApprovedCard;
