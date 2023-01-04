import React from "react";
import { Button } from "react-bootstrap";
import ProductItems from "./Card";
import classes from "./Store.module.css";

const productsArr = [
  {
    id: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = (props) => {
  const productList = productsArr.map((product) => {
    return (
      <div className="col col-6">
        <ProductItems
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          key={product.id}
          id={product.id}
        />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div>
        <div className={`row ${classes["space-item"]}`}>{productList}</div>
      </div>
      <div className="text-center">
        <Button variant="secondary" size="lg">
          See the Cart
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Store;
