import { Backdrop, CircularProgress } from "@mui/material";

type Props = {
  open: boolean;
};

export const Loading = ({ open }: Props) => {
  return (
    <Backdrop open={open} sx={{ zIndex: 1 }}>
      <CircularProgress />
    </Backdrop>
  );
};
