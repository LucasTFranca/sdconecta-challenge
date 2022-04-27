import React, { useContext, useRef } from "react";
import PokemonContext from "../context/PokemonContext";
import { Pokemon } from "../interfaces";
import PokemonCard from "./PokemonCard";

function PokemonList(): JSX.Element {
  const { pokemons, loadMorePokemon } = useContext(PokemonContext);
  const time = useRef<null | NodeJS.Timeout>(null);

  window.onscroll = () => {
    if (time.current) clearTimeout(time.current);

    time.current = setTimeout(() => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;

      if (scrollHeight - scrollTop - 100 <= clientHeight) {
        loadMorePokemon();
      }
    }, 500);
  };

  return (
    <div>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
