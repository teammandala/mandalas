import React, { useState, useEffect } from "react";
<<<<<<< HEAD

=======
import { useNavigate, Link } from "react-router-dom";
>>>>>>> cfecfb299e5fcc259282edeabda9a7de65ada576
import "./style.css";
import { Card, Row, Col, Button } from "antd";
import auction from "../../../api/auction";
import { Container } from "react-bootstrap";
const { Meta } = Card;

const Liveauctions = () => {
  const [data, setData] = useState([]);

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
      <Container>
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
                    <Container>
                      <Row>
                        <Col lg>
                          <Card
                            className="auctions"
                            // bordered={false}
                            style={{
                              width: 300,
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
                            <p>Ends At: {items.bidEnd}</p>
                            <Button
                              type="primary"
                              block
                              href={`/auctionandbid/${items._id}`}
                            >
                              Enter Live Auction
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

export default Liveauctions;
