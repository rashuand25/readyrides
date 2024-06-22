import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';

const NavBarComponent = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand to="/">Ready Rides</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/products">Products</Nav.Link>
            <Nav.Link to='/reservations'>Reservations</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <SignInModal />
          <p>Or</p>
          <SignUpModal />
        </Nav>
      </Navbar>
  );
};

export default NavBarComponent;
