import { React } from "react";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Store from "./Components/Products/Store";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Store />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
