import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/css/styles.css";

// context api providers

// import { AppProvider } from "./projects/12-sidebar-modal/context";
// import { AppProvider } from "./projects/13-stripe-submenus/context";
// import { AppProvider } from "./projects/14-cart/context";
import { AppProvider } from "./projects/15-cocktails/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
