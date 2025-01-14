import { Box, Typography } from "@mui/material";
import _ from "lodash";
import { PokemonDetailModel } from "../../../model/PokemonDetailModel";
import { PokemonType } from "../../common/PokemonType";
import { TextContent } from "./TextContent";

type Props = {
  pokemon: PokemonDetailModel;
};

export const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <Box>
      <Typography variant="h6" textAlign="center">
        Pokémon data
      </Typography>

      <TextContent label="National No" value={pokemon.id} />
      <TextContent
        label="Type"
        component={
          <PokemonType
            types={pokemon.types}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          />
        }
      />
      <TextContent
        label="Species"
        value={`${_.upperFirst(pokemon.species.name)} Pokémon`}
      />
      <TextContent label="Height" value={`${pokemon.height} dm`} />
      <TextContent label="Weight" value={`${pokemon.weight} hg`} />
    </Box>
  );
};
