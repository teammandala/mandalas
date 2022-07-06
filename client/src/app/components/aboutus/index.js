import React from "react";
import "./index.css";
import Common from "./common.jsx";
import web from "../../components/media/auction1.png";
import saphal from "../../components/media/pfp.jpg";
import sagar from "../../components/media/sagar.jpg";
import bj from "../../components/media/bj.jpg";
import wrisav from "../../components/media/wrisav.png";
import banish from "../../components/media/banish.jpg";
import { Container } from "react-bootstrap";
import { Card, Row, Col } from "antd";
const { Meta } = Card;
const index = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <Container>
          <Row>
            <Col lg>
              <Common
                name="About"
                imgsrc={web}
                visit="/contact"
                btname="Contact Us"
              />
            </Col>
          </Row>
        </Container>
        <Container classname='section'>
          <Row >
        <Col md="6" lg="4" className="text-center s1-advice">
            <h3>Introducing Auction</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">

            <h3>User friendly Interface</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">

            <h3>Items Every-One Loves </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </Col>
          </Row>
        </Container>
          <Container>
            <div className="mem"><h1>Our Development Team Members</h1></div>
          <Row>
            <Col lg>
              <Card
                className="teams"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    className="rounded-circle"
                    alt="auctionimg"
                    width={350}
                    height={200}
                    src={banish}
                  />
                }
              >
                <Meta
                  className="p-1 justify-content-center"
                  title={"Banish Sapkota"}
                />
              </Card>
            </Col>
            <Col lg>
              <Card
                className="teams"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    className="rounded-circle"
                    alt="auctionimg"
                    width={350}
                    height={200}
                    src={saphal}
                  />
                }
              >
                <Meta
                  className="p-1 justify-content-center"
                  title={"Saphal Sherchan"}
                />
              </Card>
            </Col>
            <Col lg>
              <Card
                className="teams"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    className="rounded-circle"
                    alt="auctionimg"
                    width={350}
                    height={200}
                    src={sagar}
                  />
                }
              >
                <Meta
                  className="p-1 justify-content-center"
                  title={"Sagar Chalaugain"}
                />
              </Card>
            </Col>
            <Col lg>
              <Card
                className="teams"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    className="rounded-circle"
                    alt="auctionimg"
                    width={350}
                    height={200}
                    src={bj}
                  />
                }
              >
                <Meta
                  className="p-1 justify-content-center"
                  title={"Bijaya Acharya"}
                />
              </Card>
            </Col>
            <Col lg>
              <Card
                className="teams"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    className="rounded-circle"
                    alt="auctionimg"
                    width={350}
                    height={200}
                    src={wrisav}
                  />
                }
              >
                <Meta
                  className="p-1 justify-content-center"
                  title={"Wrisav Gautam"}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default index;
