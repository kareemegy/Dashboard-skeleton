import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./styles/index.css";
import { UIProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <Layout />
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
