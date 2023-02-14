import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import CartProvider from "./store/CartProvider";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home/Home";
import Store from "./Components/Pages/Products/Store";
import ContactUs from "./Components/Pages/ContactUs";
import ProductsDetails from "./Components/Pages/Products/ProductsDetails"

function App() {
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
    <CartProvider>
      <Header/ >
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/store">
          <Store />
        </Route>
        <Route path="/contact">
          <ContactUs onAddDetails={addHandler} />
        </Route>
        
        <Route path="/store/:productId">
          <ProductsDetails/>
         </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
