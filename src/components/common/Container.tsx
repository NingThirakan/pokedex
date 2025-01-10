import { Container as MuiContainer } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <MuiContainer maxWidth="xl" sx={{ pt: 2, pb: 4 }}>
      {children}
    </MuiContainer>
  );
};
