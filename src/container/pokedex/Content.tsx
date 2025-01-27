import { Button, Grid2 as Grid } from "@mui/material";
import _ from "lodash";
import { PokemonCard } from "../../components/pokemon/PokemonCard";
import { Colors } from "../../constants/Colors";
import { PokedexModel } from "../../model/PokemonModel";

type Props = {
  pokemonList?: PokedexModel;
  isShowLoadMore: boolean;
  onLoadMore: () => void;
};

export const Content = ({ pokemonList, isShowLoadMore, onLoadMore }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      p={4}
      mt={2}
      border={`1px solid ${Colors.primary}`}
      borderRadius={2}
      sx={{
        backgroundColor: Colors.background,
      }}
    >
      {_.map(pokemonList?.results, (pokemon, index) => (
        <Grid key={index}>
          <PokemonCard pokemonName={pokemon.name} />
        </Grid>
      ))}

      <Grid size={12} display="flex" justifyContent="center">
        {isShowLoadMore && (
          <Button onClick={onLoadMore} sx={{ mt: 1 }}>
            Load more
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
