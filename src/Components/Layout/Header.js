import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Nav, Navbar } from "react-bootstrap/";
const Header = (props) => {
  return (
    <>
      <Navbar
        fixed="top"
        className="justify-content-center"
        bg="dark"
        variant="dark"
      >
        <Nav >
          <Nav.Link  href="/home">HOME</Nav.Link>
          <Nav.Link eventKey="/store">STORE</Nav.Link>
          <Nav.Link eventKey="/about">ABOUT</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            <HeaderCartButton />
          </Nav.Link>
        </Nav>
      </Navbar><br></br>
      <div className={classes.generics}>The Generics</div>
    </>
  );
};

export default Header;
