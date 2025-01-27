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
  selectedPokemon: string;
  searchLimit: { offset: number; limit: number };
  isSearch: boolean;

  onSetPokemonList: (pokemon: PokemonDetailModel) => void;
  onSetPageType: (pageType: PageType, name: string) => void;
  onGoBack: () => void;
  onSetKeyword: (keyword: string) => void;
  onSetIsSearch: (value: boolean) => void;
  onLoadMore: () => void;
  onAddDetail: (formData: PokemonDetailSchema) => void;
};

export const usePokemonStore = create<PokemonState>((set) => ({
  query: { keyword: "", offset: 0, limit: 20, enabled: true },
  pokemonList: [],
  pageType: PageType.Search,
  selectedPokemon: "",
  searchLimit: { offset: 0, limit: 20 },
  isSearch: false,

  onSetPokemonList(pokemon) {
    set((state) => {
      if (!state.isSearch) {
        const isDuplicate = _.some(
          state.pokemonList,
          (p) => p.id === pokemon.id
        );
        if (!isDuplicate) {
          return {
            pokemonList: [...state.pokemonList, pokemon],
          };
        }
        return state;
      } else {
        return {
          pokemonList: [pokemon],
        };
      }
    });
  },
  onSetPageType(pageType, name) {
    set(() => {
      return { pageType: pageType, selectedPokemon: name };
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
  onSetKeyword(keyword) {
    set((state) => {
      return {
        query: { ...state.query, keyword: _.lowerCase(keyword) },
      };
    });
  },
  onSetIsSearch(value) {
    set({ isSearch: value });
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
