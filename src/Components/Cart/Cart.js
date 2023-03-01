import React, { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeaderCartButton from "../Layout/HeaderCartButton";
import Order from "./Order";
import AuthContext from "../../store/auth-context";

const Cart = (props) => {
  const authCtxt = useContext(AuthContext);
  const isLoggedIn = authCtxt.isLoggedIn;

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {isLoggedIn && (
        <HeaderCartButton onShowCart={() => setShowCart(!showCart)} />
      )}
      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(!showCart)}
        placement={"end"}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <div className="text-center" />
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
