import { useQuery } from "@tanstack/react-query";
import { PokedexReq } from "../@types";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";

export const useGetAllPokemon = ({ offset, limit, enabled }: PokedexReq) => {
  const fetchPokemon = async () => {
    const resPokedex = await fetch(
      `${pokemon_api}?offset=${offset}&limit=${limit}`
    );
    const pokedex: PokedexModel = await resPokedex.json();

    const pokemons: PokemonDetailModel[] = await Promise.all(
      pokedex.results.map(async (item) => {
        const res = await fetch(`${pokemon_api}/${item.name}`);
        return res.json();
      })
    );

    return {
      count: pokedex.count,
      pokemonList: pokemons,
    };
  };

  const { isLoading, data } = useQuery<PokemonModel>({
    queryKey: ["getAllPokemon", offset, limit],
    queryFn: fetchPokemon,
    enabled: enabled,
  });

  return { isLoading, data };
};
