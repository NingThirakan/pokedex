import _ from "lodash";
import { create } from "zustand";
import { GetPokemonReq } from "../@types/PokemonType";
import { PageType } from "../constants/PageType";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokemonDetailSchema } from "../schema/PokemonDetailSchema";

type PokemonState = {
  query: GetPokemonReq;
  pokemonList: PokemonDetailModel[];
  pageType: PageType;
  pokemonId: number | null;
  searchLimit: { offset: number; limit: number };
  enableGetAll: boolean;

  onChangePokemonList: (pokemon: PokemonDetailModel[]) => void;
  onChangePageType: (pageType: PageType, id: number) => void;
  onGoBack: () => void;
  onChangeKeyword: (keyword: string) => void;
  onChangeEnableGetAll: (value: boolean) => void;
  onLoadMore: () => void;
  onAddDetail: (formData: PokemonDetailSchema) => void;
};

export const usePokemonStore = create<PokemonState>((set) => ({
  query: { keyword: "", offset: 0, limit: 20 },
  pokemonList: [],
  pageType: PageType.Search,
  pokemonId: null,
  searchLimit: { offset: 0, limit: 20 },
  enableGetAll: true,

  onChangePokemonList(pokemon) {
    set({ pokemonList: pokemon });
  },
  onChangePageType(pageType, id) {
    set(() => {
      return { pageType: pageType, pokemonId: id };
    });
  },
  onGoBack() {
    set((state) => {
      return {
        pageType: PageType.Search,
        query: { ...state.query, keyword: "" },
      };
    });
  },
  onChangeKeyword(keyword) {
    set((state) => {
      return {
        query: { ...state.query, keyword: _.lowerCase(keyword) },
      };
    });
  },
  onChangeEnableGetAll(value) {
    set({ enableGetAll: value });
  },
  onLoadMore() {
    set((state) => {
      return { query: { ...state.query, limit: state.query.limit! + 20 } };
    });
  },
  onAddDetail(formData) {
    set((state) => {
      return {
        pokemonList: state.pokemonList.map((pokemon) =>
          pokemon.name === formData.name
            ? { ...pokemon, detail: formData.detail }
            : pokemon
        ),
      };
    });
  },
}));
