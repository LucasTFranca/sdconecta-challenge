import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PokemonDetails/:id" element={<PokemonDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
