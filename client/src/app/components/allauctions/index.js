import React, { useState, useEffect } from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import auction from "../../api/auction";
const { Meta } = Card;


const Allauctions = () => {
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
        if(items.status ==="approved"){
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
        }
        
      })}
    </>
  );
};

export default Allauctions