import { useQuery } from "@tanstack/react-query";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokemonService } from "../service/PokemonService";

export const useGetPokemonByName = (name: string) => {
  const { isFetching, data } = useQuery<PokemonDetailModel>({
    queryKey: ["getPokemonByName", name],
    queryFn: () => PokemonService.getPokemonByName(name),
  });

  return { isFetching, data };
};
