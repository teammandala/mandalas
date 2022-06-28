import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import './style.css'

const Home = () => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="container-fluid">
          <h1>Welcome to Mandala's Admin Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col lg >
          <Card  className="Card1">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>
                Total Users:
              </Card.Text>
              <Button href='/user' variant="secondary">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card   className="Card2">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>KYC</Card.Title>
              <Card.Text>
                Total Kyc Request: 
              </Card.Text>
              <Button href='/kycrequest' variant="secondary">Verify Them</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card   className="Card3">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Auction Request</Card.Title>
              <Card.Text>
                Total Auction Request: 
              </Card.Text>
              <Button href='/auctionrequest' variant="primary">Review It</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card   className="Card4">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Carousels</Card.Title>
              <Card.Text>
                Total Carousels Active:
              </Card.Text>
              <Button href='/carousel' variant="primary">Take Action</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
