import { create } from "zustand";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { SearchPokemonReq } from "../@types";

type PokemonState = {
  query: SearchPokemonReq;
  pokemonList: PokemonDetailModel[];
  isViewDetail: boolean;
  pokemonId: number | null;
  searchLimit: { offset: number; limit: number };
  enableGetAll: boolean;

  onChangePokemonList: (pokemon: PokemonDetailModel[]) => void;
  onChangeIsViewDetail: (id: number) => void;
  onGoBack: () => void;
  onChangeKeyword: (keyword: string) => void;
  onChangeEnableGetAll: (value: boolean) => void;
};

export const usePokemonStore = create<PokemonState>((set) => ({
  query: { keyword: "", offset: 0, limit: 20 },
  pokemonList: [],
  isViewDetail: false,
  pokemonId: null,
  searchLimit: { offset: 0, limit: 20 },
  enableGetAll: true,

  onChangePokemonList(pokemon) {
    set({ pokemonList: pokemon });
  },
  onChangeIsViewDetail(id) {
    set((state) => {
      return { isViewDetail: !state.isViewDetail, pokemonId: id };
    });
  },
  onGoBack() {
    set((state) => {
      return { isViewDetail: false, query: { ...state.query, keyword: "" } };
    });
  },
  onChangeKeyword(keyword) {
    set((state) => {
      return { query: { ...state.query, keyword } };
    });
  },
  onChangeEnableGetAll(value) {
    set({ enableGetAll: value });
  },
}));
