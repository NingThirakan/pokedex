import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useCallback, useEffect, useMemo } from "react";
import { Colors } from "../../constants/Colors";
import { PageType } from "../../constants/PageType";
import { useGetPokemonByName } from "../../hook/useGetPokemonById";
import { useLoading } from "../../store/LoadingStore";
import { usePokemonStore } from "../../store/PokemonStore";
import { hexToRgb } from "../../utils";
import { PokemonType } from "../common/PokemonType";

type Props = {
  pokemonName: string;
};

export const PokemonCard = ({ pokemonName }: Props) => {
  const { setIsLoading } = useLoading();
  const { onSetPokemonList, onSetPageType } = usePokemonStore();
  const { data, isFetching } = useGetPokemonByName(pokemonName);

  const backgroundColor = useMemo(() => {
    const typeName = data?.types?.[0]?.type?.name as keyof typeof Colors;
    const colorHex = Colors[typeName] || "#FFFFFF";
    return `rgba(${hexToRgb(colorHex)})`;
  }, [data]);

  const handleClick = useCallback(() => {
    onSetPageType(PageType.ViewDetail, pokemonName);
  }, [pokemonName, onSetPageType]);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  useEffect(() => {
    if (data) {
      onSetPokemonList(data);
    }
  }, [data]);

  return (
    <Card
      sx={{
        width: 270,
        backgroundColor: backgroundColor,
      }}
    >
      <CardActionArea onClick={handleClick}>
        <Box display="flex" justifyContent="center" alignContent="center">
          <CardMedia
            component="img"
            image={data?.sprites.other["official-artwork"].front_default}
            sx={{
              pt: 1,
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
            <Typography>{data?.id}</Typography>
            <Typography variant="subtitle1">
              {_.upperFirst(data?.name)}
            </Typography>
          </Box>
          <PokemonType
            types={data?.types}
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
