import React from 'react'
import { NavDropdown, Nav, Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import './style.css'
const Navigationbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="/">Mandala</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="auction">Auction</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              
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
                <Button variant="outline-danger">Search</Button>
              </Form>
              <NavDropdown className='me-5 animated fadeIn show fadeOut' title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigationbar;