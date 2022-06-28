import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import "./style.css";
import getUser from "../../api/user";
import { useNavigate } from "react-router-dom";

const Topnavigation = () => {
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

  const logout = () => {
    getUser.logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <Navbar className="navbar" bg="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="/">
          <h>Mandala Admin</h>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          {(() => {
            if (isAdmin) {
              return (
                <Nav>
                  <NavDropdown
                    className="ml-auto"
                    title={currentUser.username}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="*">Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              );
            } else if (isAuctioneer) {
              return (
                <Nav>
                  <NavDropdown
                    className="ml-auto"
                    title="Admin Login Only"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              );
            } else if (isUser) {
              return (
                <Nav>
                  <NavDropdown
                    className="ml-auto"
                    title="Admin Login Only"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              );
            } else {
              return (
                <Nav>
                  <NavDropdown
                    className="ml-auto"
                    title="Login Here"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              );
            }
          })()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnavigation;
