export interface ProviderProps {
  children: JSX.Element;
}

export interface RawPokemon {
  url: string;
}

interface Type {
  type: {
    name: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Sprite {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  abilities: Ability[];
  sprites: Sprite;
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetails extends Pokemon {
  weight: number;
  height: number;
  stats: Stat[];
}

export interface ProviderState {
  pokemons: Pokemon[];
  loadMorePokemon: () => void;
}
