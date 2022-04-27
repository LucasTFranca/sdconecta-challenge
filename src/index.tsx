import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PokemonProvider from "./context/PokemonProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonProvider>
  </React.StrictMode>
);

reportWebVitals();
