import { PokemonDetailModel } from "./PokemonDetailModel";

export type PokedexModel = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};

export type PokemonModel = {
  count: number;
  pokemonList: PokemonDetailModel[];
};
