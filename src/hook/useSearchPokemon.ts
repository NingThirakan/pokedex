import { useQuery } from "@tanstack/react-query";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { usePokemonStore } from "../store/PokemonStore";

export const useSearchPokemon = () => {
  const {
    query: { keyword },
  } = usePokemonStore();

  const { isFetching, data, error, isError } = useQuery<PokemonDetailModel>({
    queryKey: ["getPokemon", keyword],
    queryFn: async () => {
      const res = await fetch(`${pokemon_api}/${keyword}`);
      return await res.json();
    },
    enabled: keyword.trim().length > 0,
  });

  return { isFetching, data, error, isError };
};
