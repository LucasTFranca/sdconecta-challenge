import React, { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import { Pokemon } from "../interfaces";
import PokemonCard from "./PokemonCard";

function Pokemons(): JSX.Element {
  const { pokemons } = useContext(PokemonContext);

  return (
    <div>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokemons;
