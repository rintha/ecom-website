import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeaderCartButton from "../Layout/HeaderCartButton";
import Order from "./Order";

const Cart = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <HeaderCartButton onShowCart={() => setShowCart(!showCart)} />
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
