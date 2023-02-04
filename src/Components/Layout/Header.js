import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Cart from "../Cart/Cart";

const Header = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="text-bg-secondary fw-bold h1">
            The Generics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store">
                STORE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                ABOUT
              </Nav.Link>
            </Nav>
            <Cart />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
