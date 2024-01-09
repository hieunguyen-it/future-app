import React from "react";
import ReactDOM from "react-dom/client";
import '@styles/global.css';
import { Providers } from "./providers";
import {
  BrowserRouter,
} from "react-router-dom";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
