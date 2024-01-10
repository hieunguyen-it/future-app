import React from "react";
import ReactDOM from "react-dom/client";
import '@styles/global.css';
import { Providers } from "./providers";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Routes>
           <Route path="/*" element={<App />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
