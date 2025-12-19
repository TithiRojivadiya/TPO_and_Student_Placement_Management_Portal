// main.jsx or index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // v6
import App from "./App.jsx";
import "./index.css"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
