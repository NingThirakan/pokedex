import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetAllPokemon } from "../../hook/useGetAllPokemon";
import { PokedexModel } from "../../model/PokemonModel";
import { useLoading } from "../../store/LoadingStore";
import { usePokemonStore } from "../../store/PokemonStore";

type PokedexContextType = {
  open: boolean;
  pokemonData?: PokedexModel;
  onOpenForm: () => void;
  onClose: () => void;
};

const PokedexContext = createContext({} as PokedexContextType);

type Props = {
  children: ReactNode;
};

export const PokedexProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const { setIsLoading } = useLoading();

  const { query, isSearch } = usePokemonStore();

  const { data: pokemonData, isFetching: isFetchingGetAllPokemon } =
    useGetAllPokemon({
      offset: query.offset!,
      limit: query.limit!,
      enabled: !isSearch,
    });

  const onOpenForm = useCallback(() => {
    setOpen(true);
  }, [open, setOpen]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [open, setOpen]);

  useEffect(() => {
    setIsLoading(isFetchingGetAllPokemon);
  }, [isFetchingGetAllPokemon]);

  return (
    <PokedexContext.Provider
      value={{
        open,
        onOpenForm,
        onClose,
        pokemonData,
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
