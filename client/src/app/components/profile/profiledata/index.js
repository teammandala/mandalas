import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import "./style.css";
import EasyEdit, { Types } from "react-easy-edit"
import { Link, useParams } from "react-router-dom";
import user from "../../../api/user";

const Profiledata = ({ }) => {
  const currentUser = user.getCurrentUser();
  const username = useParams().username;


  return (
    <div>
      {(() => {
        if (currentUser && currentUser.username === username) {
          return (
              <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="card">
                          <div className="card-body">
                            <h6>Information</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6>Username</h6>
                                <p className="text-muted">
                                  {currentUser.username}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6>Email</h6>
                                <p className="text-muted">
                                  {currentUser.email}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6>Phone</h6>
                                <p className="text-muted">
                                  {currentUser.phone}

                                </p>
                              </div>

                              <div className="col-6 mb-3">
                                <h6>Address</h6>
                                <p className="text-muted">
                                  {currentUser.address}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6>Role</h6>
                                <p className="text-muted">{currentUser.role}</p>
                              </div>

                              <div className="col-6 mb-3">
                                <h6>Joined At</h6>
                                <p className="text-muted">
                                  {currentUser.created}
                                </p>
                              </div>
                              <div className="col-12 mb-3">
                                <h6>Bio</h6>
                                <p className="text-muted">{currentUser.bio}</p>
                              </div>
                            </div>
                            <h6>Auctions</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6>Recent</h6>
                                <p className="text-muted">Thanka Panting</p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6>Most Viewed</h6>
                                <p className="text-muted">Art</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-start">
                              <a href="#!">
                                <i className="fab fa-facebook-f fa-lg me-3"></i>
                              </a>
                              <a href="#!">
                                <i className="fab fa-twitter fa-lg me-3"></i>
                              </a>
                              <a href="#!">
                                <i className="fab fa-instagram fa-lg"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          );
        } else {
          return (
            <div className="no-access">
              <h1>You do not have access</h1>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Profiledata;
