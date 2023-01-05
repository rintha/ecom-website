import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Cart from "../Cart/Cart";
const Header = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link eventKey="/store">STORE</Nav.Link>
            <Nav.Link eventKey="/about">ABOUT</Nav.Link>
          </Nav>
        </Container>
        <Cart />
      </Navbar>
      <br />
      <Navbar bg="secondary" variant="dark">
        <Container className="justify-content-center p-5">
          <Navbar.Brand className="fw-bold fs-1">The Generics</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
