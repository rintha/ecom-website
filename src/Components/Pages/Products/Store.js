import React from "react";
import { Button } from "react-bootstrap";
import ItemCard from "./ItemCard";
import classes from "./Store.module.css";

const productsArr = [
  {
    id: "1",
    title: "ALBUM 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    title: "ALBUM 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    title: "ALBUM 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "ALBUM 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = (props) => {
  const productList = productsArr.map((product) => {
    return (
      <div className="col col-6">
        <ItemCard
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
    <section className="m-3">
      <div className="text-center">
        <h2 className="fw-bold mt-3 pb-5">MUSIC</h2>
      </div>
      <div>
        <div className={`row ${classes["space-item"]}`}>{productList}</div>
      </div>
      <div className="text-center">
        <Button variant="secondary" size="lg">
          See the Cart
        </Button>
      </div>
    </section>
  );
};

export default Store;
