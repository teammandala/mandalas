import React from "react";
import Profiledata from "../../components/profile/profiledata";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import Profileupdate from "../../components/profile/profileupdate";
import user from "../../api/user";
import "./style.css";
import { useParams } from "react-router-dom";

const Profilepage = () => {
  const currentUser = user.getCurrentUser();
  const username = useParams().username;

  return (
    <div>
      {(() => {
        if (currentUser && currentUser.username === username) {
          return (
            <div className="container-fluid p-3">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-lg-0">
                  <div className="card mb-3 gradient-custom profile-back">
                    <Row>
                      <Col>
                        <div className="container-fluid text-center text-white">
                          <img
                            src={"http://localhost:8080/" + currentUser.avatar}
                            alt="Avatar"
                            className="img-fluid my-5"
                          />
                          <h5>{currentUser.name}</h5>
                          <p>{currentUser.role}</p>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <Tabs
                            defaultActiveKey="profiledata"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                          >
                            <Tab eventKey="profiledata" title="profile data">
                              <div className="container-fluid">
                                <Profiledata />
                              </div>
                            </Tab>
                            <Tab
                              eventKey="profileupdate"
                              title="Profile Update"
                            >
                              <div className="container-fluid">
                                <Profileupdate />
                              </div>
                            </Tab>
                            <Tab eventKey="kyc" title="KYC">
                              <h1>this is kyc you have requested</h1>
                            </Tab>
                          </Tabs>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="no-access">
              <h1>you do not have access</h1>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Profilepage;
