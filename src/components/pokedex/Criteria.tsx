import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import _ from "lodash";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import {
  SearchPokemonSchema,
  searchPokemonSchema,
} from "../../schema/SearchPokemonSchema";
import { TextField } from "../common/TextField";
import { Colors } from "../../constants/Colors";

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
  const { register, handleSubmit } = useForm<SearchPokemonSchema>({
    defaultValues: { keyword: "" },
    resolver: zodResolver(searchPokemonSchema),
  });

  const onSearch = handleSubmit((data) => {
    onChangeEnableGetAll(false);
    onChangeKeyword(data.keyword);
  });

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
        <TextField
          name="keyword"
          register={register}
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
