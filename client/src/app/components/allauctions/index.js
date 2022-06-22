import React, { useState, useEffect } from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import auction from "../../api/auction";

import { Col, Divider, Row, Card } from "antd";
const { Meta } = Card;
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

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
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {data.map((items) => {
          if (items.status === "approved") {
            return (
              <>
                <Divider orientation="left">{}</Divider>

                <Col className="gutter-row" span={6}>
                  <div style={style}>
                    <Card
                      bordered={false}
                      //   style={{
                      //     width: 300,
                      //   }}
                      cover={
                        <img
                          alt="auctionimg"
                          //   width={200}
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
                  </div>
                </Col>
              </>
            );
          }
        })}
      </Row>
    </>
  );

  //     <Col className="gutter-row" span={6}>
  //     <div style={style}>col-6</div>
  //   </Col>
  //   <Col className="gutter-row" span={6}>
  //     <div style={style}>col-6</div>
  //   </Col>
  //   <Col className="gutter-row" span={6}>
  //     <div style={style}>col-6</div>
  //   </Col>
  //   <Col className="gutter-row" span={6}>
  //     <div style={style}>col-6</div>
  //   </Col>
  //     <div className="site-card-wrapper">
  //               <Row gutter={16}>
  //                 <Col className="gutter-row" span={8}>
  //                   <Card
  //                     bordered={false}
  //                     style={{
  //                       width: 300,
  //                       style,
  //                     }}
  //                     cover={
  //                       <img
  //                         alt="auctionimg"
  //                         width={200}
  //                         src={"http://localhost:8080/" + items.image}
  //                       />
  //                     }
  //                     actions={[
  //                       <SettingOutlined key="setting" />,
  //                       <EditOutlined key="edit" />,
  //                       <EllipsisOutlined key="ellipsis" />,
  //                     ]}
  //                   >
  //                     <Meta
  //                       title={items.itemName}
  //                       description={items.startingBid}
  //                     />
  //                   </Card>
  //                 </Col>
  //               </Row>
  //             </div>

  //   const [data, setData] = useState([]);
  //   // const [approved, setApproved] = useState([]);

  //   useEffect(() => {
  //     auction
  //       .getApprovedAuctionData()
  //       .then((res) => {
  //         const data = res.data.auctionData;
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  //   return (
  //     <>
  //       {data.map((items) => {
  //         if (items.status === "approved") {
  //           return (
  //             <div className="site-card-wrapper">
  //               <Row gutter={16}>
  //                 <Col className="gutter-row" span={8}>
  //                   <Card
  //                     bordered={false}
  //                     style={{
  //                       width: 300,
  //                       style,
  //                     }}
  //                     cover={
  //                       <img
  //                         alt="auctionimg"
  //                         width={200}
  //                         src={"http://localhost:8080/" + items.image}
  //                       />
  //                     }
  //                     actions={[
  //                       <SettingOutlined key="setting" />,
  //                       <EditOutlined key="edit" />,
  //                       <EllipsisOutlined key="ellipsis" />,
  //                     ]}
  //                   >
  //                     <Meta
  //                       title={items.itemName}
  //                       description={items.startingBid}
  //                     />
  //                   </Card>
  //                 </Col>
  //               </Row>
  //             </div>
  //           );
  //         }
  //       })}
  //     </>
  //   );
};

export default Allauctions;
