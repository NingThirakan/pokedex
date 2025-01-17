import { useQuery } from "@tanstack/react-query";
import { GetPokemonReq } from "../@types/PokemonType";
import { PokemonModel } from "../model/PokemonModel";
import { PokemonService } from "../service/PokemonService";

// refactor use param แทนการเรียกจาก store เพราะดารทำ custom hook คือไม่ต้องการผูกให้อยู่ภายใต้อะไร
export const useGetAllPokemon = ({ offset, limit, enabled }: GetPokemonReq) => {
  const { isFetching, data } = useQuery<PokemonModel>({
    queryKey: ["getAllPokemon", offset, limit],
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
