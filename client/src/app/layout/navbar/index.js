import React, { useState, useEffect } from "react";
import {
  NavDropdown,
  Nav,
  Container,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";
import getUser from "../../api/user";

const Navigationbar = () => {
  const navigate = useNavigate();

  const [isAuctioneer, setIsAuctioneer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getUser.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setIsAdmin(user.role === "ADMIN");
      setIsAuctioneer(user.role === "AUCTIONEER");
      setIsUser(user.role === "USER");
    }
  }, []);

  const logOut = () => {
    getUser.logout();
    window.location.reload();
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className="brand" href="/"><h>Mandala</h></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-l">
              <Nav.Link href="auction">Auction</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              {/* <Nav.Link href="/policy">Policy</Nav.Link>
              <Nav.Link href="/termsandconditions">Terms & Condtions</Nav.Link> */}
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  bg="light"
                  aria-label="Search"
                />
              </Form>
              {(() => {
                if (isUser) {
                  return (
                    <NavDropdown
                      className="me-5 animated fadeIn show fadeOut"
                      title={currentUser.username}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        href={"/profile/" + currentUser.username}
                      >
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={logOut}>
                        Logout
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="*">Normal User</NavDropdown.Item>
                    </NavDropdown>
                  );
                } else if (isAuctioneer) {
                  return (
                    <NavDropdown
                      className="me-5 animated fadeIn show fadeOut"
                      title={currentUser.username}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        href={"/profile/" + currentUser.username}
                      >
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={logOut}>
                        Logout
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href={"/auctioneer/" + currentUser.username}>Auction Request</NavDropdown.Item>
                    </NavDropdown>
                  );
                } else if (isAdmin) {
                  return (
                    <NavDropdown
                      className="me-5 animated fadeIn show fadeOut"
                      title={currentUser.username}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        href={"/profile/" + currentUser.username}
                      >
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/auction">
                        Auction
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                      <NavDropdown.Item onClick={logOut}>
                        Logout
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="*">Admin</NavDropdown.Item>
                    </NavDropdown>
                  );
                } else {
                  return (
                    <NavDropdown
                      className="me-5 animated fadeIn show fadeOut"
                      title="Account"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="*">
                        Password Reset
                      </NavDropdown.Item>
                    </NavDropdown>
                  );
                }
              })()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
