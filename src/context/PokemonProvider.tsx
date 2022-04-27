import React, { useEffect, useMemo, useState } from "react";
import PokemonContext from "./PokemonContext";
import { Pokemon, ProviderProps } from "../interfaces";
import { getPokemons } from "../helpers";

function PokemonProvider({ children }: ProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function requestPokemons(): Promise<void> {
      const data = await getPokemons(10);

      setPokemons(data);
    }

    requestPokemons();
  }, []);

  const state = useMemo(() => ({ pokemons }), [pokemons]);

  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  );
}

export default PokemonProvider;
