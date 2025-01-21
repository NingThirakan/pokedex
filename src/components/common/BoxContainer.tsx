import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Colors } from "../../constants/Colors";

type Props = {
  children: ReactNode;
  maxWidth?: number;
  p?: number;
  px?: number;
  py?: number;
};

export const BoxContainer = ({ children, maxWidth, px, py }: Props) => {
  return (
    <Box
      // display="flex"
      // flexWrap="wrap"
      // justifyContent="center"
      // gap={2}
      // mt={3}
      border={`1px solid ${Colors.primary}`}
      borderRadius={2}
      py={px || 4}
      px={py || 1}
      maxWidth={maxWidth || 1500}
      sx={{
        backgroundColor: Colors.background,
      }}
    >
      {children}
    </Box>
  );
};
