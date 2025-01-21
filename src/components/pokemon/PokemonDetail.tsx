import { Box, Typography } from "@mui/material";
import { Stats } from "../../constants/Stats";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { PokemonType } from "../common/PokemonType";
import { Stat } from "./Stat";
import { TextContent } from "./TextContent";
import { useMemo } from "react";
import { TextContentType } from "../../@types/TextContent";

type Props = {
  pokemon: PokemonDetailModel;
};

export const PokemonDetail = ({ pokemon }: Props) => {
  const renderPokemonStat = useMemo(() => {
    return pokemon.stats.map((stat) => (
      <Stat
        key={stat.stat.name}
        label={Stats[stat.stat.name as keyof typeof Stats]}
        value={stat.base_stat}
      />
    ));
  }, [pokemon.stats]);

  const content: TextContentType[] = useMemo(() => {
    return [
      {
        label: "National No",
        value: pokemon.id,
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
            {renderPokemonStat}
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

      {content.map((item) => (
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
