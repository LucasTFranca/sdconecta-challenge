import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../helpers";
import { PokemonDetails } from "../interfaces";

function PokemonDetailsCard(): JSX.Element {
  const [pokemon, setPokemon] = useState<PokemonDetails>({
    id: 0,
    name: "",
    types: [],
    abilities: [],
    sprites: {
      front_default: "",
    },
    weight: 0,
    height: 0,
    stats: [],
  });

  const { id } = useParams();

  useEffect(() => {
    async function requestPokemon() {
      const data = await getPokemon(id || "");

      setPokemon(data);
    }

    requestPokemon();
  }, []);

  return (
    <div>
      <span>{pokemon.name}</span>
      <span>{id}</span>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <span>{pokemon.height}</span>
      <span>{`${pokemon.weight} kg`}</span>
      {pokemon.types.map(({ type }) => (
        <span key={type.name}>{type.name}</span>
      ))}

      {pokemon.abilities.map(({ ability }) => (
        <span key={ability.name}>{ability.name}</span>
      ))}
    </div>
  );
}

export default PokemonDetailsCard;
