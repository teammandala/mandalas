import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./style.css";
import user from "../../api/user";
import auction from "../../api/auction";
import kyc from "../../api/kycrequest";

const Home = () => {
  const [userCount, setUserCount] = useState("");
  const [auctionCount, setAuctionCount] = useState("");
  const [kycCount, setKYCCount] = useState("");

  useEffect(() => {
    user
      .getAllUser()
      .then((res) => {
        const userCount = res.data.user.length;
        setUserCount(userCount);
      })
      .catch((error) => {
        console.log(error);
      });

    auction
      .getAuctionData()
      .then((res) => {
        const auctionCount = res.data.auctionData.length;
        setAuctionCount(auctionCount);
      })
      .catch((error) => {
        console.log(error);
      });

    kyc
      .getKycData()
      .then((res) => {
        const kycCount = res.data.kycData.length;
        setKYCCount(kycCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="container-fluid">
          <h1>Welcome to Mandala's Admin Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col lg>
          <Card className="Card1">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>
                <h1>{userCount}</h1>
              </Card.Text>
              <Button href="/user" variant="secondary">
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card className="Card2">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>KYC</Card.Title>
              <Card.Text>
                <h1>{auctionCount}</h1>
              </Card.Text>
              <Button href="/kycrequest" variant="secondary">
                Verify Them
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card className="Card3">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Auction Request</Card.Title>
              <Card.Text>
                <h1>{kycCount}</h1>
              </Card.Text>
              <Button href="/auctionrequest" variant="primary">
                Review It
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card className="Card4">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Carousels</Card.Title>
              <Card.Text>Total Carousels Active:</Card.Text>
              <Button href="/carousel" variant="primary">
                Take Action
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
