import React from "react";
import Liveauctions from '../../components/allauctions/liveAuction'
import Pastauctions from '../../components/allauctions/pastAuction'
import Upcommingauctions from '../../components/allauctions/upcommingauctions';
import {Tab, Col, Nav, Row} from 'react-bootstrap'
const Auction = () => {
  return (
    <>
    <div  className='container-fluid'>
              <div className="auctioneer">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="p-3">
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first"><h1> Live Auctions</h1></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second"><h2>Past Auctions</h2></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third"><h3>Future Auctions</h3></Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Liveauctions />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Pastauctions />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Upcommingauctions />
                        </Tab.Pane>
                      </Tab.Content>
                      
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div></>
    
  );
};

export default Auction;
