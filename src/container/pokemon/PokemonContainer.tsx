import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../components/common/Container";
import { GoBackButton } from "../../components/common/GoBackButton";
import { Form } from "../../components/pokemon/Form";
import { PokemonDetail } from "../../components/pokemon/PokemonDetail";
import { Colors } from "../../constants/Colors";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import {
  pokemonDetailSchema,
  PokemonDetailSchema,
} from "../../schema/PokemonDetailSchema";
import { hexToRgb } from "../../utils";

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

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        mt={3}
        border={`1px solid ${Colors.primary}`}
        borderRadius={2}
        py={4}
        px={1}
        width={1500}
        sx={{
          backgroundColor: Colors.background,
        }}
      >
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
      </Box>
    </Container>
  );
};
