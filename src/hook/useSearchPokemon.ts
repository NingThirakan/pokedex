import { useQuery } from "@tanstack/react-query";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokemonService } from "../service/PokemonService";

export const useSearchPokemon = (keyword: string) => {
  // const { isFetching, data, error, isError } = useQuery<PokemonDetailModel>({
  //   queryKey: ["getPokemon", keyword],
  //   queryFn: () =>
  //     PokemonService.searchPokemon({
  //       keyword: keyword,
  //       offset: 0,
  //       limit: 0,
  //     }),
  //   enabled: keyword.trim().length > 0,
  // });
  // return { isFetching, data, error, isError };
};
