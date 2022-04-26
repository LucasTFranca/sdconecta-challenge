import axios from "axios";
import { Pokemons } from "../interfaces";

export default async function getFirstPokemons(): Promise<Pokemons> {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const pokemons = data.results;

  return pokemons;
}
