import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { Colors } from "../../../constants/Colors";
import { PokemonDetailModel } from "../../../model/PokemonDetailModel";
import { hexToRgb } from "../../../utils";
import { PokemonType } from "../../common/PokemonType";

type Props = {
  pokemon: PokemonDetailModel;
  onClick: (id: number) => void;
};

export const PokedexCard = ({ pokemon, onClick }: Props) => {
  const { id, name, sprites, types } = pokemon;
  const image = sprites.other["official-artwork"].front_default;

  return (
    <Card
      sx={{
        width: 270,
        backgroundColor: `rgba(${hexToRgb(Colors.grass)})`,
      }}
    >
      <CardActionArea onClick={() => onClick(id)}>
        <Box display="flex" justifyContent="center" alignContent="center">
          <CardMedia
            component="img"
            image={image}
            sx={{
              width: 160,
              objectFit: "contain",
            }}
          />
        </Box>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            alignContent: "center",
            padding: "0px 12px 12px",
          }}
        >
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2">{id}</Typography>
            <Typography variant="subtitle2">{_.upperFirst(name)}</Typography>
          </Box>
          <PokemonType
            types={types}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
