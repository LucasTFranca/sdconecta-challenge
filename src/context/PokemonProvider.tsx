import React, { useEffect, useMemo, useState } from "react";
import PokemonContext from "./PokemonContext";
import { ProviderProps } from "../interfaces";
import getFirstPokemons from "../helpers";

function PokemonProvider({ children }: ProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<object>([]);

  useEffect(() => {
    async function requestPokemons(): Promise<void> {
      const data = await getFirstPokemons();
      setPokemons(data);
    }

    requestPokemons();
  }, [setPokemons]);

  const state = useMemo(() => ({}), [pokemons]);
  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  );
}

export default PokemonProvider;
