import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Store from "./Components/Products/Store";
import CartProvider from "./store/CartProvider";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <CartProvider>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          <Header />
          <main>
            <Store />
          </main>
          <Footer />
        </Route>
      </CartProvider>
    </Router>
  );
}

export default App;
