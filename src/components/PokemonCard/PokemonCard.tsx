import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../../interfaces";

import "./PokemonCard.css";

function PokemonCard({ pokemon }: { pokemon: Pokemon }): JSX.Element {
  const { name, id, types, abilities, sprites } = pokemon;

  return (
    <div className="card">
      <img src={sprites.front_default} alt={name} />
      <div className="name-id-container">
        <span>{name}</span>
        <span>{id}</span>
      </div>
      <div className="list-container">
        <div>
          <span>Type</span>
          <ul>
            {types.map(({ type }) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <span>Abilities</span>
          <ul>
            {abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link className="link" to={`/PokemonDetails/${id}`} />
    </div>
  );
}

export default PokemonCard;
