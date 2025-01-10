import { Search } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { TextField } from "../../common/TextField";

export const Criteria = () => {
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
          sx={{ width: 500 }}
          placeholder="Name or number"
          icon={<Search color="secondary" />}
        />
        <Button>Search</Button>
      </Box>
    </>
  );
};
