import { Box, SxProps, Theme, Typography } from "@mui/material";
import _ from "lodash";
import { Colors } from "../../constants/Colors";
import { Type } from "../../model/PokemonDetailModel";

type Props = {
  types?: Type[];
  sx?: SxProps<Theme>;
};

export const PokemonType = ({ types, sx }: Props) => {
  return (
    <Box gap={1} sx={sx}>
      {_.map(types, (type) => (
        <Box
          key={type.type.name}
          width={70}
          height={22}
          borderRadius={1}
          sx={{
            backgroundColor: Colors[type.type.name as keyof typeof Colors],
          }}
        >
          <Typography variant="subtitle2" textAlign="center" color="white">
            {_.upperFirst(type.type.name)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
