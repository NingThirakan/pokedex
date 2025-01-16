import { useQuery } from "@tanstack/react-query";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";
import { usePokemonStore } from "../store/PokemonStore";
import { PokemonService } from "../service/PokemonService";

export const useGetAllPokemon = () => {
  const {
    enableGetAll,
    query: { offset, limit },
  } = usePokemonStore();

  const { isFetching, data } = useQuery<PokemonModel>({
    queryKey: ["getAllPokemon", offset, limit],
    queryFn: () =>
      PokemonService.getAllPokemon({
        keyword: "",
        offset: offset,
        limit: limit,
      }),
    enabled: enableGetAll,
    staleTime: 1000 * 60,
    // cacheTime: 1000 * 60 * 5, // เก็บข้อมูลใน cache 5 นาที
  });

  return { isFetching, data };
};
