import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";

export const useSearchPokemon = () => {
  const [keyword, setKeyword] = useState("");

  const { isLoading, data, error, isError } = useQuery<PokemonDetailModel>({
    queryKey: ["getPokemon", keyword],
    queryFn: async () => {
      const res = await fetch(`${pokemon_api}/${keyword}`);
      return await res.json();
    },
    enabled: keyword.trim().length > 0,
  });

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  return { isLoading, data, error, handleSearch, isError };
};
