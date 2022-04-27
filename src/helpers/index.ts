import axios from "axios";
import { Pokemon, RawPokemon } from "../interfaces";

const baseUrl = "https://pokeapi.co/api/v2";

export default async function getPokemons(
  limitNumber: number
): Promise<Pokemon[]> {
  const { data } = await axios.get(`${baseUrl}/pokemon?limit=${limitNumber}`);
  const pokemons: Pokemon[] = [];

  await Promise.all(
    data.results.map(async (pokemon: RawPokemon) => {
      const pokemonData = await axios.get(pokemon.url);

      pokemons.push(pokemonData.data);
    })
  );

  return pokemons;
}
