import { useQuery } from "@tanstack/react-query";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokemonService } from "../service/PokemonService";

export const useGetPokemonByName = (name: string) => {
  const { isFetching, data, refetch } = useQuery<PokemonDetailModel>({
    queryKey: ["getPokemonByName", name],
    queryFn: () => PokemonService.getPokemonByName(name),
    staleTime: 1000 * 60,
    enabled: !!name,
  });

  return { isFetching, data, refetch };
};
