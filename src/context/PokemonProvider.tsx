import React, { useMemo } from "react";
import PokemonContext from "./PokemonContext";
import { ProviderProps } from "../interfaces";

function PokemonProvider({ children }: ProviderProps): JSX.Element {
  // @ts-ignore
  const state = useMemo(() => ({}));
  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  );
}

export default PokemonProvider;
