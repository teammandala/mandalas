import React, { useState, useEffect } from "react";
import AuctionForm from "../../components/form/auction";
// import { Link } from 'react-router-dom';
// import "./style.css";
import getUser from '../../api/user';
import Noaccess from "../noaccess";
import {Nav, Tab, Row, Col,} from'react-bootstrap'
import Myauctions from "../../components/auction/myauctions";
import Auctionstatus from "../../components/auction/auctionstatus";


function Auctioneer() {

  const [isAuctioneer, setIsAuctioneer] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getUser.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setIsAuctioneer(user.role === "AUCTIONEER");
    }
  }, []);

  return (
    <>
      {(() => {
        if (isAuctioneer) {
          return (
            <div className="auctioneer-page">
              {/* <div className="auctioneer-box">
                <div className="illustration-wrapper">
                  <h1>Please Provide Right Information!</h1>
                  <p>for the approval for the auction request</p>
                </div>
                <AuctionForm />
              </div> */}

              <div>
                <Tab.Container className='container-fluid' id="left-tabs-example" defaultActiveKey="first">
                  <Row className="p-3">
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Auction Request</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">My Auction</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">My Auction Status</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <AuctionForm />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Myauctions/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Auctionstatus />
                        </Tab.Pane>
                      </Tab.Content>
                      
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>

          )
        } else {
          return (
            <div>
              <Noaccess />
            </div>
          )


        }
      })()}

    </>
  );
}

export default Auctioneer;
