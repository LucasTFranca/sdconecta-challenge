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

export interface ProviderState {
  pokemons: Pokemon[];
}
