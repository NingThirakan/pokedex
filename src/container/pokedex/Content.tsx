import { Button, Grid2 as Grid } from "@mui/material";
import _ from "lodash";
import { PokemonCard } from "../../components/pokemon/PokemonCard";
import { Colors } from "../../constants/Colors";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { PageType } from "../../constants/PageType";

type Props = {
  pokemonList: PokemonDetailModel[];
  isShowLoadMore: boolean;
  onChangePageType: (pageType: PageType, id: number) => void;
  onLoadMore: () => void;
};

export const Content = ({
  pokemonList,
  isShowLoadMore,
  onChangePageType,
  onLoadMore,
}: Props) => {
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
      {_.map(pokemonList, (pokemon) => (
        <Grid key={pokemon.id}>
          <PokemonCard
            pokemon={pokemon}
            onClick={() => onChangePageType(PageType.ViewDetail, pokemon.id)}
          />
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
