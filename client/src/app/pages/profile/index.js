import React, { useState } from "react";
import Profiledata from "../../components/profile/profiledata";
import { Tabs, Tab, Row, Col , Button} from "react-bootstrap";
import { EditOutlined,} from "@ant-design/icons";
import user from "../../api/user";
import "./style.css";
import { useParams } from "react-router-dom";
import ProfileUpdateForm from "../../components/form/profileUpdate";
import AvatarUpdate from "../../components/form/avatarUpdate";
import Noaccess from "../noaccess";
const Profilepage = () => {
  const [show, setShow] = useState(false);

  function changeState() {
    setShow(!show);
  }

  const currentUser = user.getCurrentUser();
  const username = useParams().username;

 

  return (
    <div>
      {(() => {
        if (currentUser && currentUser.username === username) {
          return (
            <div className="container-fluid p-3">
              <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col col-lg-6 mb-lg-0">
                  <div className="card mb-3 profile-back">
                    <Row>
                      <Col>
                        <div className="container-fluid text-center text-white">
                          <img
                            src={"http://localhost:8080/" + currentUser.avatar}
                            alt="Avatar"
                            className=" img-fluid my-5 avatar-img"
                          />
                          <EditOutlined
                            className="edit-icon"
                            onClick={changeState}
                          />

                          {show && <AvatarUpdate />}
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
                                <ProfileUpdateForm />
                              </div>
                            </Tab>
                            <Tab
                              eventKey="kyc"
                              title="Be Auctioneer"
                            >
                              <Button href={`/profile/${currentUser.username}/${currentUser._id}`}> More Details</Button>
                            </Tab>
                            <Tab
                              eventKey="mybids"
                              title="My Bids"
                            >
                              <div className="container-fluid">
                              <Button href={`/profile/bids/${currentUser.username}/${currentUser._id}`}> View</Button>
                              </div>
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
              <Noaccess />
            </div>
          );
        }
      })()}
    </div>
  );
};
export default Profilepage;
