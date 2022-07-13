import React, { useEffect, useState } from "react";
import user from "../../api/user";
import auction from "../../api/auction";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Card } from "antd";
import { Container, Button, Tabs, Tab } from "react-bootstrap";
import "./style.css";
import moment from "moment";
import Noaccess from "../../pages/noaccess";
const { Meta } = Card;

const UserbidsData = () => {
  const [data, setData] = useState([]);
  const id = useParams().id;
  const navigate = useNavigate();

  const currentUser = user.getCurrentUser();

  const username = useParams().username;

  useEffect(() => {
    auction
      .getMyBid(id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const currentDate = new Date();

  return (
    <>
      {(() => {
        if (currentUser && currentUser.username === username) {
          return (
            <div className="card bidsdata">
              <div col-md-12>
                <Button onClick={() => navigate(-1)}>Return to profile</Button>
              </div>

              <Container className="container-fluid">
                <Tabs
                  defaultActiveKey="Completed"
                  id="uncontrolled-tab-example"
                  className="nav mb-3 nav-pills justify-content-center p-2"
                >
                  <Tab
                    class="tab-text"
                    data-toogle="pill"
                    eventKey="ongoing"
                    title={<h5>Ongoing</h5>}
                  >
                    <Row className="justify-content-center">
                      {data.map((items) => {
                        if (
                          currentDate > new Date(items.bidStart) &&
                          currentDate < new Date(items.bidEnd)
                        ) {
                          return (
                            <div className="site-card wrapper">
                              <Container>
                                <Row>
                                  <Col lg>
                                    <Card
                                      className="auctions"
                                      style={{
                                        width: 300,
                                      }}
                                      cover={
                                        <img
                                          alt="auctionimg"
                                          width={350}
                                          height={200}
                                          src={
                                            "http://localhost:8080/" +
                                            items.image
                                          }
                                        />
                                      }
                                    >
                                      <Meta
                                        className="p-1"
                                        title={items.itemName}
                                        description={
                                          "Starting price: " + items.startingBid
                                        }
                                      />
                                      <p> Organised By: {items.seller.name}</p>
                                      <p>
                                        {" "}
                                        Ends At:{" "}
                                        {moment(items.bidEnd).format(
                                          "DD/MM/YYYY:HH:mm:ss"
                                        )}
                                      </p>
                                      <Button
                                        type="primary"
                                        block
                                        href={`/auctionandbid/${items._id}`}
                                      >
                                        View Auction
                                      </Button>
                                    </Card>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          );
                        }
                      })}
                    </Row>
                  </Tab>
                  <Tab
                    class="tab-text"
                    data-toogle="pill"
                    eventKey="Completed"
                    title={<h5>Completed</h5>}
                  >
                    <Row className="justify-content-center">
                      {data.map((items) => {
                        if (currentDate > new Date(items.bidEnd)) {
                          return (
                            <div className="site-card wrapper">
                              <Container>
                                <Row>
                                  <Col lg>
                                    <Card
                                      className="auctions"
                                      style={{
                                        width: 300,
                                      }}
                                      cover={
                                        <img
                                          alt="auctionimg"
                                          width={350}
                                          height={200}
                                          src={
                                            "http://localhost:8080/" +
                                            items.image
                                          }
                                        />
                                      }
                                    >
                                      <Meta
                                        className="p-1"
                                        title={items.itemName}
                                      />
                                      <p> Organised By: {items.seller.name}</p>
                                      <p>
                                        {moment(items.bidEnd).format(
                                          "DD/MM/YYYY:HH:mm:ss"
                                        )}
                                      </p>
                                      <Button
                                        type="primary"
                                        block
                                        href={`/auctionandbid/${items._id}`}
                                      >
                                        View Details
                                      </Button>
                                    </Card>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          );
                        }
                      })}
                    </Row>
                  </Tab>
                  <Tab
                    class="tab-text"
                    data-toogle="pill"
                    eventKey="Yourwin"
                    title={<h5>Your Wins</h5>}
                  >
                    <Row className="justify-content-center">
                      {data.map((items) => {
                        if (currentDate > new Date(items.bidEnd)) {
                          return (
                            <div className="site-card wrapper">
                              <Container>
                                <Row>
                                  <Col lg>
                                    <Card
                                      className="auctions"
                                      style={{
                                        width: 300,
                                      }}
                                      cover={
                                        <img
                                          alt="auctionimg"
                                          width={350}
                                          height={200}
                                          src={
                                            "http://localhost:8080/" +
                                            items.image
                                          }
                                        />
                                      }
                                    >
                                      <Meta
                                        className="p-1"
                                        title={items.itemName}
                                      />
                                      <p> Organised By: {items.seller.name}</p>
                                      <p>
                                        Ended At:
                                        {moment(items.bidEnd).format(
                                          "DD/MM/YYYY:HH:mm:ss"
                                        )}
                                      </p>

                                      {
                                        (items.bids
                                          .sort()
                                          .reverse()[0].bidder.username = currentUser.username ? (
                                          <a>
                                            You won this auction <br /> by Rs:
                                            {items.bids[0].bid} <br />
                                            Delivery status: {items.deliverystatus}
                                          </a>
                                        ) : (
                                          <a>you Didn't won this auction</a>
                                        ))
                                      }
                                      <Button
                                        type="primary"
                                        block
                                        href={`/auctionandbid/${items._id}`}
                                      >
                                        View Details
                                      </Button>
                                    </Card>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          );
                        }
                      })}
                    </Row>
                  </Tab>
                </Tabs>
              </Container>
            </div>
          );
        } else {
          return <Noaccess />;
        }
      })()}
    </>
  );
};

export default UserbidsData;
