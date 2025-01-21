import { PokedexContainer } from "../container/pokedex/PokedexContainer";
import { PokedexProvider } from "../container/pokedex/PokedexContext";

export const PokedexPage = () => {
  return (
    <PokedexProvider>
      <PokedexContainer />
    </PokedexProvider>
  );
};
