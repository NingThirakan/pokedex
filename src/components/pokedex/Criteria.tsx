import { Search } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Colors } from "../../constants/Colors";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { SearchPokemonSchema } from "../../schema/SearchPokemonSchema";
import { FormTextField } from "../common/FormTextField";

type Props = {
  pokemon: PokemonDetailModel | undefined;
  onChangePokemonList: (pokemon: PokemonDetailModel[]) => void;
  onChangeKeyword: (keyword: string) => void;
  onChangeEnableGetAll: (value: boolean) => void;
};

export const Criteria = ({
  pokemon,
  onChangePokemonList,
  onChangeKeyword,
  onChangeEnableGetAll,
}: Props) => {
  const { handleSubmit } = useFormContext<SearchPokemonSchema>();

  const onSearch = useCallback(() => {
    handleSubmit((formData) => {
      onChangeEnableGetAll(false);
      onChangeKeyword(formData.keyword);
    });
  }, [handleSubmit, onChangeEnableGetAll, onChangeKeyword]);

  useEffect(() => {
    if (pokemon) {
      onChangePokemonList([pokemon]);
    }
  }, [pokemon]);

  return (
    <>
      <Typography variant="h4" align="center">
        Pokédex
      </Typography>
      <Typography variant="subtitle1" align="center">
        Search for a Pokémon by name or using its National Pokédex number.
      </Typography>

      <Box display="flex" justifyContent="center" pt={1} gap={1}>
        <FormTextField
          name="keyword"
          placeholder="Name or number"
          icon={<Search color="secondary" />}
          sx={{
            width: 500,
            backgroundColor: Colors.textFieldBackgroundColor,
            color: Colors.placeholderColor,
          }}
        />
        <Button onClick={onSearch}>Search</Button>
      </Box>
    </>
  );
};
