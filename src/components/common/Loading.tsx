import { Backdrop, CircularProgress } from "@mui/material";
import { useLoading } from "../../store/LoadingStore";

export const Loading = () => {
  const { isLoading } = useLoading();

  return (
    <Backdrop open={isLoading} sx={{ zIndex: 1 }}>
      <CircularProgress />
    </Backdrop>
  );
};
