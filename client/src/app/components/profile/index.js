import React from 'react'
import { NavDropdown } from "react-bootstrap";
import './style.css'
import { Link } from "react-router-dom";

const Profiledata = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                    />
                    <h5>Banish Sapkota</h5>
                    <p>Auctioner</p>

                    <NavDropdown title="Edit Profile">
                      <NavDropdown.Item href="/profile">
                        <Link to="/update"> Update Profile </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link to="/update_password"> Change Password </Link>{" "}
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Username</h6>
                          <p className="text-muted">Banish</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">banish@example.com</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">1234567890</p>
                        </div>

                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">Imadol</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Role</h6>
                          <p className="text-muted">Admin</p>
                        </div>

                        <div className="col-6 mb-3">
                          <h6>Joined At</h6>
                          <p className="text-muted">12-12-2000</p>
                        </div>
                        <div className="col-12 mb-3">
                          <h6>Bio</h6>
                          <p className="text-muted">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profiledata