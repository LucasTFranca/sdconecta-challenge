import { createContext } from "react";
import { ProviderState } from "../interfaces";

const PokemonContext = createContext({} as ProviderState);

export default PokemonContext;
