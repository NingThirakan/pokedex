import { useQuery } from "@tanstack/react-query";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";
import { PokemonService } from "../service/PokemonService";

type Props = {
  offset: number;
  limit: number;
  enabled: boolean;
};

// refactor use param แทนการเรียกจาก store เพราะการทำ custom hook คือไม่ต้องการผูกให้อยู่ภายใต้อะไร
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
    // cacheTime: 1000 * 60 * 5, // เก็บข้อมูลใน cache 5 นาที
  });

  return { isFetching, data };
};
