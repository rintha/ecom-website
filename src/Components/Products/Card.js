import React from "react";
import { Card, Button } from "react-bootstrap";

const productItems = (props) => {
  return (
      <Card border="light" style={{ width: "20rem" }} className="text-center">
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Img className="p-4" variant="bottom" src={`${props.imageUrl}`} />
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <span>
              $<span id="item-price">{props.price}</span>
            </span>
            <Button variant="primary" size="lg">
              ADD TO CART
            </Button>
          </div>
        </div>
      </Card>
  );
};

export default productItems;
