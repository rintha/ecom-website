import React from "react";
import { Button } from "react-bootstrap";
const cartElements = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Order = (props) => {
  return (
    <>
      <table class="table table-hover text-center p-2">
        <thead>
          <tr>
            <th scope="col">ITEM</th>
            <th scope="col">PRICE</th>
            <th scope="col">QUANTITY</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {cartElements.map((cartitem) => {
            return (
              <tr key={cartitem.title}>
                <td class="pe-2">
                  <img
                    src={`${cartitem.imageUrl}`}
                    class="img-fluid rounded"
                    alt="..."
                  />

                  {cartitem.title}
                </td>

                <td>{cartitem.price}</td>

                <td>{cartitem.quantity}</td>
                <td>
                  <Button variant="danger">REMOVE</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end">
        <p class="fw-bold">
          Total
          <span className="text-muted">$0</span>
        </p>
      </div>
      <div class="text-center">
        <Button variant="primary">PURCHASE</Button>
      </div>
    </>
  );
};

export default Order;
