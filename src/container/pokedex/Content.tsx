import { Button, Grid2 as Grid } from "@mui/material";
import _ from "lodash";
import { PokemonCard } from "../../components/pokemon/PokemonCard";
import { Colors } from "../../constants/Colors";
import { Result } from "../../model/PokemonModel";

type Props = {
  pokemonList: Result[];
  pokemonName?: string;
  isSearch: boolean;
  onLoadMore: () => void;
};

export const Content = ({
  pokemonList,
  pokemonName,
  isSearch,
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
      {!isSearch ? (
        <>
          {_.map(pokemonList, (pokemon) => (
            <Grid key={pokemon.name}>
              <PokemonCard pokemonName={pokemon.name} />
            </Grid>
          ))}

          <Grid size={12} display="flex" justifyContent="center">
            <Button onClick={onLoadMore} sx={{ mt: 1 }}>
              Load more
            </Button>
          </Grid>
        </>
      ) : (
        <Grid>
          <PokemonCard pokemonName={pokemonName ?? ""} />
        </Grid>
      )}
    </Grid>
  );
};
