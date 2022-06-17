import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'
import "./style.css"
import user from '../../api/user'
import { useNavigate } from 'react-router-dom'

const Topnavigation = () => {
  const navigate=useNavigate();

  const logout = () => {
    user.logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <Navbar className='navbar' bg="light" expand="lg">
  <Container>
    <Navbar.Brand className='brand' href="/"><h>Mandala Admin</h></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        </Nav>
        <Nav>
        <NavDropdown className='ml-auto' title="admin" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default Topnavigation