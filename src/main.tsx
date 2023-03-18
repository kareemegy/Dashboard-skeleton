import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./styles/index.css";
import { UIProvider } from "./contexts";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UIProvider>
      <Layout />
    </UIProvider>
  </React.StrictMode>
);
