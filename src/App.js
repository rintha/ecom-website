import React from "react";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Footer />
    </CartProvider>
  );
}

export default App;
