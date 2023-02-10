import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Cart from "../Cart/Cart";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Store from "../Products/Store";
import ContactUs from "../Pages/ContactUs";

const Header = () => {
  async function addHandler(details) {
    const response = await fetch(
      "https://e-commerce-website-4135f-default-rtdb.asia-southeast1.firebasedatabase.app/details.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <BrowserRouter>
      <>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container className="justify-content-center ">
            <Nav>
              <Nav.Link className="mx-4" as={Link} to="/home">
                HOME
              </Nav.Link>
              <Nav.Link className="mx-4" as={Link} to="/">
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
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Store />} />
        <Route
          path="/contact"
          element={<ContactUs onAddDetails={addHandler} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Header;
