import { Box, Button, Grid2 as Grid, Modal } from "@mui/material";
import { Colors } from "../../constants/Colors";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { hexToRgb } from "../../utils";
import { BoxContainer } from "../../components/common/BoxContainer";
import { Container } from "../../components/common/Container";
import { GoBackButton } from "../../components/common/GoBackButton";
import { PokemonDetail } from "../../components/pokemon/PokemonDetail";
import { useCallback, useEffect, useState } from "react";
import { Form } from "../../components/pokemon/Form";
import {
  pokemonDetailSchema,
  PokemonDetailSchema,
} from "../../schema/PokemonDetailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

type Props = {
  pokemon: PokemonDetailModel;
  onGoBack: () => void;
  onAdd: (formData: PokemonDetailSchema) => void;
};

export const PokemonContainer = ({ pokemon, onGoBack, onAdd }: Props) => {
  const [open, setOpen] = useState(false);

  const form = useForm<PokemonDetailSchema>({
    defaultValues: { name: "", detail: "" },
    resolver: zodResolver(pokemonDetailSchema),
    mode: "all",
  });

  const { name, sprites, types } = pokemon;
  const image = sprites.other["official-artwork"].front_default;

  const onClickAdd = useCallback(() => {
    setOpen(true);
  }, [open, setOpen]);

  if (open) {
    return (
      <FormProvider {...form}>
        {/* <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > */}
        <Form
          name={pokemon.name}
          open={open}
          onClose={() => setOpen(false)}
          onAdd={onAdd}
        />
        {/* </Modal> */}
      </FormProvider>
    );
  }

  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <GoBackButton onClick={onGoBack} />
        <Button onClick={onClickAdd}>Add detail</Button>
      </Box>

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
