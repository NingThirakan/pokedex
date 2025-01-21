import { Box, Typography } from "@mui/material";
import { Stats } from "../../constants/Stats";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { PokemonType } from "../common/PokemonType";
import { Stat } from "./Stat";
import { TextContent } from "./TextContent";

type Props = {
  pokemon: PokemonDetailModel;
};

export const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <>
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
      <TextContent label="Height" value={`${pokemon.height} dm`} />
      <TextContent label="Weight" value={`${pokemon.weight} hg`} />
      <TextContent label="Base Exp" value={`${pokemon.base_experience} hg`} />
      <TextContent
        label="Stats"
        component={
          <Box display="flex" gap={1} justifyContent="center" width="280px">
            {/* useMemo */}
            {pokemon.stats.map((stat) => (
              <Stat
                key={stat.stat.name}
                label={Stats[stat.stat.name as keyof typeof Stats]}
                value={stat.base_stat}
              />
            ))}
          </Box>
        }
      />

      <TextContent label="Detail" value={pokemon.detail} />
    </>
  );
};
