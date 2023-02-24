import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Cart from "../Cart/Cart";
import AuthContext from "../../store/auth-context";

const Header = () => {


 const authCtx = useContext(AuthContext);
  const logoutHandler=(e)=>{
    authCtx.logout();
  }

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Nav>
            <Nav.Link className="mx-2" as={Link} to="/home">
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
        <div >
          <button onClick={logoutHandler} type="button" class="btn btn-outline-info mx-2">
            Logout
          </button>
          <Cart />
        </div>
      </Navbar>
      <br />

      <div className="text-center m-0">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div>
    </>
  );
};
export default Header;
