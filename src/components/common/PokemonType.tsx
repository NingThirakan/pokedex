import { Box, SxProps, Theme, Typography } from "@mui/material";
import { Colors } from "../../constants/Colors";
import { Type } from "../../model/PokemonDetailModel";

type Props = {
  types: Type[];
  sx?: SxProps<Theme>;
};

export const PokemonType = ({ types, sx }: Props) => {
  return (
    <Box gap={1} sx={sx}>
      {types.map((type) => (
        <Box
          key={type.type.name}
          width={70}
          height={22}
          borderRadius={1}
          sx={{
            // padding: "2px 4px",
            backgroundColor: Colors[type.type.name as keyof typeof Colors],
          }}
        >
          <Typography variant="body2" textAlign="center" color="white">
            {type.type.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
