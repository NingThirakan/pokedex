import { useQuery } from "@tanstack/react-query";
import { PokedexReq } from "../@types";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";
import { PokemonDetailModel } from "../model/PokemonDetailModel";

export const useGetAllPokemon = ({ offset, limit }: PokedexReq) => {
  const fetchPokemon = async () => {
    const resPokedex = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const pokedex: PokedexModel = await resPokedex.json();

    const pokemons: PokemonDetailModel[] = await Promise.all(
      pokedex.results.map(async (item) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${item.name}`
        );
        return res.json();
      })
    );

    return {
      count: pokedex.count,
      pokemonList: pokemons,
    };
  };

  const { isLoading, data } = useQuery<PokemonModel>(
    ["getAllPokemon", offset, limit],
    fetchPokemon
  );

  return { isLoading, data };
};
