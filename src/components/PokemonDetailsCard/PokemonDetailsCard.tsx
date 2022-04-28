import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../helpers";
import { PokemonDetails } from "../../interfaces";

import "./PokemonDetailsCard.css";

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
    <div className="app">
      <div className="name-id--details-container">
        <span>{pokemon.name}</span>
        <span className="span-id">{`N°${id}`}</span>
      </div>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <div className="information-container">
        <div>
          <span className="white-span">Height</span>
          <span>{`${pokemon.height} m`}</span>
        </div>
        <div>
          <span className="white-span">Weight</span>
          <span>{`${pokemon.weight} kg`}</span>
        </div>
        <div>
          <span className="white-span">Type</span>
          {pokemon.types.map(({ type }) => (
            <span key={type.name}>{type.name}</span>
          ))}
        </div>

        <div>
          <span className="white-span">Abilities</span>
          {pokemon.abilities.map(({ ability }) => (
            <span key={ability.name}>{ability.name}</span>
          ))}
        </div>
      </div>

      <div className="stats-container">
        {pokemon.stats.map(({ base_stat: baseStat, stat: { name } }) => (
          <div key={pokemon.name + name}>
            <span className="name-stat">{name}</span>
            <progress className="progress-bar" value={baseStat} max={255} />
            <span className="value-stat">{baseStat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetailsCard;
