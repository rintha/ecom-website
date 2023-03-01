import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Cart from "../Cart/Cart";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = (e) => {
    e.preventDefault()
    authCtx.logout();
  };

  return (
    <React.Fragment>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link className="mx-2" as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/store">
              STORE
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link className="ms-2" as={Link} to="/contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Container>
        {isLoggedIn && (
          <div>
            <button
              onClick={logoutHandler}
              type="button"
              class="btn btn-outline-info mx-2"
            >
              Logout
            </button>

            <Cart />
          </div>
        )}
      </Navbar>
      <br />

      <div className="text-center m-0">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div>
    </React.Fragment>
  );
};
export default Header;
