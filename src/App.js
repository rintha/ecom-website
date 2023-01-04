import React from "react";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Store from "./Components/Products/Store";

function App() {
  return (
    <div>
      <Header />
      <main className="justify-content-center">
        <Store />
      </main>
      <Footer />
    </div>
  );
}

export default App;
