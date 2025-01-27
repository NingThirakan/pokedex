import { Search } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Colors } from "../../constants/Colors";
import { SearchPokemonSchema } from "../../schema/SearchPokemonSchema";
import { FormTextField } from "../common/FormTextField";

type Props = {
  onSetKeyword: (keyword: string) => void;
  onSetIsSearch: (value: boolean) => void;
};

export const Criteria = ({ onSetKeyword, onSetIsSearch }: Props) => {
  const { handleSubmit } = useFormContext<SearchPokemonSchema>();

  const onSearch = handleSubmit((formData) => {
    if (formData.keyword) {
      onSetIsSearch(true);
      onSetKeyword(formData.keyword);
    } else {
      onSetIsSearch(false);
    }
  });

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
