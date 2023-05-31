import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/about-us" style={{ color: 'white' }}>About us</Nav.Link>
            <Nav.Link href="/contact-us" style={{ color: 'white' }}>Contact Us</Nav.Link>
            <Nav.Link href="/Apply-Internship" style={{ color: 'white' }}>Internships</Nav.Link>
            <Nav.Link href="/home" style={{ color: 'white' }}>Home</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<FaUserCircle size={30} color='white'/>}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Divider />
             <NavDropdown.Item> <Link to='/'>Logout</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
