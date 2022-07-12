import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./style.css";
import user from "../../api/user";
import auction from "../../api/auction";
import kyc from "../../api/kycrequest";
import carousel from "../../api/carousel";
import contact from "../../api/contact";

const Home = () => {
  const [userCount, setUserCount] = useState("");
  const [auctioneerCount, setAuctioneerCount] = useState("");
  const[bidderCount, setBidderCount] = useState("");
  const[adminCount, setAdminCount] = useState("");
  const [auctionCount, setAuctionCount] = useState("");
  const [approvedauctionCount, setApprovedAuctionCount] = useState("");
  const [pendingauctionCount, setPendingAuctionCount] = useState("");
  const [rejectedauctionCount, setrejectedAuctionCount] = useState("");
  const [kycCount, setKYCCount] = useState("");
  const[pendingKYCCount, setPendingKYCCount] = useState("");
  const[approvedKYCCount, setApprovedKYCCount] = useState("");
  const[rejectedKYCCount, setRejectedKYCCount] = useState("");
  const[contactedcontactCount, setContactedContactCount] = useState("");
  const[pendingcontactCount, setPendingContactCount] = useState("");
  const [carouselCount, setCarouselCount] = useState("");
  const [contactCount, setContactCount] = useState("");
  

  useEffect(() => {
    user
      .getAllUser()
      .then((res) => {
        const userCount = res.data.user.length;
        setUserCount(userCount);
        setAuctioneerCount(res.data.user.filter(item => item.role === 'AUCTIONEER').length);
        setBidderCount(res.data.user.filter(item => item.role === 'USER').length);
        setAdminCount(res.data.user.filter(item => item.role === 'ADMIN').length);
      })
      .catch((error) => {
        console.log(error);
      });


    auction
      .getAuctionData()
      .then((res) => {
        const auctionCount = res.data.auctionData.length;
        setAuctionCount(auctionCount);
        setApprovedAuctionCount(res.data.auctionData.filter(item => item.status === 'approved').length);
        setPendingAuctionCount(res.data.auctionData.filter(item => item.status === 'pending').length);
        setrejectedAuctionCount(res.data.auctionData.filter(item => item.status === 'rejected').length);

      })
      .catch((error) => {
        console.log(error);
      });

      
    kyc
      .getKycData()
      .then((res) => {
        const kycCount = res.data.kycData.length;
        setKYCCount(kycCount);
        setPendingKYCCount(res.data.kycData.filter(item => item.status === 'pending').length);
        setApprovedKYCCount(res.data.kycData.filter(item => item.status === 'auctioneer').length);
        setRejectedKYCCount(res.data.kycData.filter(item => item.status === 'rejected').length);
      })
      .catch((error) => {
        console.log(error);
      });

    carousel
      .getCarouselData()
      .then((res) => {
        const carouselCount = res.data.carouselData.length;
        setCarouselCount(carouselCount);
      })
      .catch((error) => {
        console.log(error);
      });
      
    contact
      .getAllContact()
      .then((res) => {
        const contactCount = res.data.contact.length;
        setContactCount(contactCount);
        setContactedContactCount(res.data.contact.filter(item => item.status === 'resolved').length);
        setPendingContactCount(res.data.contact.filter(item => item.status === 'pending').length);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  return (
    <>
      <Row xs={1} md={2} className="g-4 ">
        <Col className="container-fluid">
          <h1>Welcome to Mandala's Admin Dashboard</h1>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 ">
        <Col lg className="container-fluid">
          <Card className="Card1">
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Text>
                <h1>Total: {userCount}</h1>
              </Card.Text>
            
            </Card.Body>
            <Card className="Card2">
            <Card.Body>
              <Card.Text>
                <h4>Auctioneers: {auctioneerCount}</h4>
                <h4>Normal Users: {bidderCount}</h4>
                <h4>Admin: {adminCount}</h4>
              </Card.Text>
              <Button href="/user" variant="primary">
                View
              </Button>
            </Card.Body>
            
          </Card>
          </Card>
          
        </Col>
        <Col lg className="container-fluid">
          <Card className="Card2">
            <Card.Body>
              <Card.Title>KYC</Card.Title>
              <Card.Text>
                <h1>Total: {kycCount}</h1>
              </Card.Text>
             
            </Card.Body><Card className="Card3">
            <Card.Body>
              <Card.Text>
                <h4>Pending: {pendingKYCCount} Approved: {approvedKYCCount}</h4>
                <h4>Rejected: {rejectedKYCCount}</h4>
              </Card.Text>
              <Button href="/kycrequest" variant="primary">
                Verify Them
              </Button>
            </Card.Body>
          </Card>
          </Card>
        </Col>
        
          <Col lg className="container-fluid">
            <Card className="Card3">
              <Card.Body>
                <Card.Title>Carousels</Card.Title>
                <Card.Text>
                  <h1>Total: {carouselCount}</h1>
                </Card.Text>
                
              </Card.Body>
              <Card className="Card4">
              <Card.Body>
                <Card.Text>
                  <h4>Active: {carouselCount}</h4>
                </Card.Text>
                <Button href="/carousel" variant="primary">
                  Take Action
                </Button>
              </Card.Body>
            </Card>
            </Card>
          </Col>
          <Col lg className="container-fluid">
            <Card className="Card4">
             <Card.Body>
                <Card.Title>Contacts</Card.Title>
                <Card.Text>
                  <h1>Total: {contactCount}</h1>
                </Card.Text>
                
              </Card.Body>
              <Card className="Card5">
             <Card.Body>
                <Card.Text>
                  <h4>Contacted: {contactedcontactCount} Pending: {pendingcontactCount}</h4>
                </Card.Text>
                <Button href="/contactrequest" variant="primary">
                  Help Customers
                </Button>
              </Card.Body>
            </Card> 
            </Card> 
          </Col>
          <Col lg className="container-fluid">
          <Card className="Card5">
            <Card.Body>
              <Card.Title>Auction Request</Card.Title>
              <Card.Text>
                <h1>Total: {auctionCount}</h1>
              </Card.Text>
              
            </Card.Body><Card className="Card1">
            <Card.Body>
              <Card.Text>
                <h4>Approved: {approvedauctionCount}</h4>
                <h4>Pending: {pendingauctionCount} <br />
                Rejected: {rejectedauctionCount}</h4>
              </Card.Text>
              <Button href="/auctionrequest" variant="primary">
                Review It
              </Button>
            </Card.Body>
          </Card>
          </Card>
        </Col>
        </Row>
      {/* </Row> */}
    </>
  );
};

export default Home;
