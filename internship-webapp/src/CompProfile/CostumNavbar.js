import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/cmpHome">
          <img
            src={require('../images/logo.png')}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link href="/cmpHome" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="/about-us-cmp" style={{ color: 'white' }}>About us</Nav.Link>
            <Nav.Link href="/contact-us-cmp" style={{ color: 'white' }}>Contact Us</Nav.Link>
            <Nav.Link href="/Post-internship" style={{ color: 'white' }}>Internships</Nav.Link>
            
          </Nav>
          <Nav>
            <NavDropdown
              title={<FaUserCircle size={30} color='white'/>}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Login-cmp">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
