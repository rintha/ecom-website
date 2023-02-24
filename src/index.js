import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import "bootstrap-icons/font/bootstrap-icons.css"; //For Bootstrap icons

//  reactbootstrap configuration
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
);
