import React, { useState, useEffect } from "react";
import AuctionForm from "../../components/form/auction";
// import { Link } from 'react-router-dom';
import "./style.css";
import getUser from "../../api/user";
import Noaccess from "../noaccess";
import { Nav, Tab, Row, Col, Tabs } from "react-bootstrap";
import Myauctions from "../../components/auction/myallauctions";
import Ongoing from "../../components/auction/ongoing";
import Completedauctions from "../../components/auction/completedauctions";

function Auctioneer() {
  const [isAuctioneer, setIsAuctioneer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getUser.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setIsAuctioneer(user.role === "AUCTIONEER");
      setIsAdmin(user.role === "ADMIN");
    }
  }, []);

  return (
    <>
      {(() => {
        if (isAuctioneer) {
          return (
            <div className="container-fluid">
              <div className="auctioneer">
                <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                  <Row className="p-3">
                    <Col sm={2}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Auction Request</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            My Auction Status
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={10}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <AuctionForm />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          

                          <div className="container-fluid">
                            <Tabs
                              defaultActiveKey="All_Auctions"
                              id="uncontrolled-tab-example"
                              className="nav mb-3 nav-pills justify-content-center p-2"
                            >
                              <Tab
                                class="tab-text"
                                data-toogle="pill"
                                eventKey="All_Auctions"
                                title={<h5>All Auctions</h5>}
                              >
                                <Myauctions />
                              </Tab>

                              <Tab
                                class="tab-text"
                                data-toogle="pill"
                                eventKey="Ongoing Auctions"
                                title={<h5>Ongoing Auctions</h5>}
                              >
                                <Ongoing />
                              </Tab>

                              <Tab
                                class="tab-text"
                                data-toogle="pill"
                                eventKey="Completed Auctions"
                                title={<h5>Completed</h5>}
                              >
                                <Completedauctions />
                              </Tab>
                            </Tabs>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          );
        } else if (isAdmin) {
          return (
            <div className="container-fluid">
              <div className="auctioneer">
                <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                  <Row className="p-3">
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Auction Request</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            My Auction Status
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <AuctionForm />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Myauctions />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <Noaccess />
            </div>
          );
        }
      })()}
    </>
  );
}

export default Auctioneer;
