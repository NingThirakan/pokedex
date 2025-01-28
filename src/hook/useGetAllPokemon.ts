import { useQuery } from "@tanstack/react-query";
import { PokedexModel } from "../model/PokemonModel";
import { PokemonService } from "../service/PokemonService";

type Props = {
  offset: number;
  limit: number;
  enabled: boolean;
};

export const useGetAllPokemon = ({ offset, limit, enabled }: Props) => {
  const { isFetching, data } = useQuery<PokedexModel>({
    queryKey: ["getAllPokemon", offset, limit, enabled],
    queryFn: () =>
      PokemonService.getAllPokemon({
        offset: offset,
        limit: limit,
      }),
    enabled: enabled,
    staleTime: 1000 * 60,
  });

  return { isFetching, data };
};
