import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container className="justify-content-center ">
          <Nav>
            <Nav.Link className="mx-4" as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/store">
              STORE
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="ms-4" as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Container>

        <Cart />
      </Navbar>
      <br />

      <div className="text-center m-0">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div>
    </>
  );
};
export default Header;
