import { Box, Typography } from "@mui/material";
import _ from "lodash";
import { useMemo } from "react";
import { TextContentType } from "../../@types/TextContent";
import { Stats } from "../../constants/Stats";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { AudioPlayerButton } from "../common/AudioPlayerButton";
import { PokemonType } from "../common/PokemonType";
import { Stat } from "./Stat";
import { TextContent } from "./TextContent";

type Props = {
  pokemon: PokemonDetailModel;
};

export const PokemonDetail = ({ pokemon }: Props) => {
  const renderStats = useMemo(() => {
    return _.map(pokemon.stats, (stat) => (
      <Stat
        key={stat.stat.name}
        label={Stats[stat.stat.name as keyof typeof Stats]}
        value={stat.base_stat}
      />
    ));
  }, [pokemon.stats]);

  const pokemonContent: TextContentType[] = useMemo(() => {
    return [
      {
        label: "National No",
        value: pokemon.id,
      },
      {
        label: "Name",
        value: _.upperFirst(pokemon.name),
      },
      {
        label: "Type",
        component: (
          <PokemonType
            types={pokemon.types}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          />
        ),
      },
      {
        label: "Cries",
        component: <AudioPlayerButton src={pokemon.cries.latest} />,
      },
      {
        label: "Height",
        value: `${pokemon.height} Gram`,
      },
      {
        label: "Weight",
        value: `${pokemon.weight} KG`,
      },
      {
        label: "Base Exp",
        value: `${pokemon.base_experience}`,
      },
      {
        label: "Stats",
        component: (
          <Box display="flex" gap={1} justifyContent="center" width="280px">
            {renderStats}
          </Box>
        ),
      },
      {
        label: "Detail",
        value: pokemon.detail,
      },
    ];
  }, [pokemon]);

  return (
    <>
      <Typography variant="h6" textAlign="center">
        Pokémon Data
      </Typography>

      {_.map(pokemonContent, (item) => (
        <TextContent
          key={item.label}
          label={item.label}
          value={item.value}
          component={item.component}
        />
      ))}
    </>
  );
};
