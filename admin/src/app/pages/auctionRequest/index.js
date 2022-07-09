import React from "react";
import AuctionRequestTable from "../../components/table/auctionRequest/Allauctions";
import {Nav, Tab, Row, Col,} from'react-bootstrap'
import ApprovedAuctionTable from "../../components/table/auctionRequest/approved";
import PendingAuctionTable from "../../components/table/auctionRequest/pending";
import RejectedAuctionTable from "../../components/table/auctionRequest/rejected";
const AuctionRequest = () => {
  return (
    <><div  className='container-fluid'>
    <div className="auctioneer">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="p-3">
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">All Auctions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Pending Auctions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Approved Auctions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Rejected Auctions</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AuctionRequestTable />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <PendingAuctionTable/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <ApprovedAuctionTable/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <RejectedAuctionTable/>
              </Tab.Pane>
            </Tab.Content>
            
          </Col>
        </Row>
      </Tab.Container>
    </div>
  </div>
    </>
  );
};

export default AuctionRequest;
