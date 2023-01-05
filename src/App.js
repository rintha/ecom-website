import { React } from "react";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Store from "./Components/Products/Store";

function App() {
  return (
    <>
      <Header />
      <main className="justify-content-center">
        <Store />
      </main>
      <Footer />
    </>
  );
}

export default App;
