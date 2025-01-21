import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useGetAllPokemon } from "../../hook/useGetAllPokemon";
import { useSearchPokemon } from "../../hook/useSearchPokemon";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { usePokemonStore } from "../../store/PokemonStore";

type PokedexContextType = {
  pokemon?: PokemonDetailModel;
  isLoading: boolean;
};

const PokedexContext = createContext({} as PokedexContextType);

type Props = {
  children: ReactNode;
};

export const PokedexProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const { query, onChangePokemonList } = usePokemonStore();

  const { data: allPokemonData, isFetching: isFetchingGetAllPokemon } =
    useGetAllPokemon({ ...query });

  const { data: pokemon, isFetching: isFetchingSearchPokemon } =
    useSearchPokemon(query.keyword ?? "");

  const isLoading = useMemo(() => {
    return isFetchingGetAllPokemon || isFetchingSearchPokemon;
  }, [isFetchingGetAllPokemon, isFetchingSearchPokemon]);

  useEffect(() => {
    if (allPokemonData?.pokemonList) {
      onChangePokemonList(allPokemonData.pokemonList);
    }
  }, [allPokemonData]);

  return (
    <PokedexContext.Provider
      value={{
        pokemon,
        isLoading,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

// export const usePokedex = useContext(PokedexContext);
export const usePokedex = () => {
  const context = useContext(PokedexContext);

  if (!context) {
    throw new Error("usePokedex must be used within a PokedexProvider");
  }

  return context;
};
