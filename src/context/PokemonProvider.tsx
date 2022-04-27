import React, { useEffect, useMemo, useState } from "react";
import PokemonContext from "./PokemonContext";
import { Pokemon, ProviderProps } from "../interfaces";
import { getPokemons } from "../helpers";

function PokemonProvider({ children }: ProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function requestPokemons(): Promise<void> {
      const data = await getPokemons(15, 0);

      setPokemons(data);
    }

    requestPokemons();
  }, []);

  async function loadMorePokemon(): Promise<void> {
    const data = await getPokemons(10, pokemons.length);

    setPokemons((pokemon) => {
      return [...pokemon, ...data];
    });
  }

  const state = useMemo(() => ({ pokemons, loadMorePokemon }), [pokemons]);

  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  );
}

export default PokemonProvider;
