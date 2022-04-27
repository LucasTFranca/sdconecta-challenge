import axios from "axios";
import { Pokemon, PokemonDetails, RawPokemon } from "../interfaces";

const baseUrl = "https://pokeapi.co/api/v2";

export async function getPokemons(limitNumber: number): Promise<Pokemon[]> {
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

export async function getPokemon(id: string): Promise<PokemonDetails> {
  const { data } = await axios.get(`${baseUrl}/pokemon/${id}`);
  const pokemon = data;

  return pokemon;
}
