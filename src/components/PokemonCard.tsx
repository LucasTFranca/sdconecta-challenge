import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../interfaces";

function PokemonCard({ pokemon }: { pokemon: Pokemon }): JSX.Element {
  const { name, id, types, abilities, sprites } = pokemon;

  return (
    <div>
      <img src={sprites.front_default} alt="" />
      <Link to={`/PokemonDetails/${id}`}>{name}</Link>
      <span>{id}</span>
      {types.map(({ type }) => (
        <span key={type.name}>{type.name}</span>
      ))}

      {abilities.map(({ ability }) => (
        <span key={ability.name}>{ability.name}</span>
      ))}
    </div>
  );
}

export default PokemonCard;
