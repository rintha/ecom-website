import {React,useState} from "react";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Store from "./Components/Products/Store";
import Cart from "./Components/Cart/Cart";

function App() {
  const [ShowCart,SetShowCart] = useState(false);
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler = () =>{
    SetShowCart(false);
  }
  return (
    <>
      <Header onShowCart={CartShowHandler} />
      {ShowCart && <Cart onCloseCart={CartHideHandler}></Cart>}
      <main className="justify-content-center">
        <Store />
      </main>
      <Footer />
    </>
  );
}

export default App;
