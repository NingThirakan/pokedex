import { Box, Grid2 as Grid } from "@mui/material";
import { Colors } from "../../../constants/Colors";
import { PokemonDetailModel } from "../../../model/PokemonDetailModel";
import { hexToRgb } from "../../../utils";
import { BoxContainer } from "../../common/BoxContainer";
import { Container } from "../../common/Container";
import { GoBackButton } from "../../common/GoBackButton";
import { PokemonDetail } from "./PokemonDetail";

type Props = {
  pokemon: PokemonDetailModel;
  onGoBack: () => void;
};

export const PokemonContainer = ({ pokemon, onGoBack }: Props) => {
  const { name, sprites, types } = pokemon;
  const image = sprites.other["official-artwork"].front_default;

  return (
    <Container>
      <GoBackButton onClick={onGoBack} />

      <BoxContainer px={2} py={2}>
        <Grid container spacing={2} width="100%">
          <Grid size={4}>
            <Box
              bgcolor={`rgba(${hexToRgb(
                Colors[types[0].type.name as keyof typeof Colors]
              )})`}
              borderRadius={2}
            >
              <img src={image} alt={name} width="100%" />
            </Box>
          </Grid>

          <Grid size={8}>
            <PokemonDetail pokemon={pokemon} />
          </Grid>
        </Grid>
      </BoxContainer>
    </Container>
  );
};
