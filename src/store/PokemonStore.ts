import { create } from "zustand";

type PokemonState = {
  isViewDetail: boolean;
  pokemonId: number | null;
  onChangeIsViewDetail: (id: number) => void;
  onGoBack: () => void;
};

export const usePokemonStore = create<PokemonState>((set) => ({
  isViewDetail: false,
  pokemonId: null,
  onChangeIsViewDetail(id: number) {
    console.log("id", id);
    set((state) => {
      console.log("Function called with id:", id);
      return { isViewDetail: !state.isViewDetail, pokemonId: id };
    });
  },
  onGoBack() {
    set({ isViewDetail: false });
  },
}));
