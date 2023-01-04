import React from "react";
import { Badge } from "react-bootstrap";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <div >
      <button className={classes.button} onClick={props.onclick}>
        cart
        <Badge>0</Badge>
      </button>
    </div>
  );
};

export default HeaderCartButton;
