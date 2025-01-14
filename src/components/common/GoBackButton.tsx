import { ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";

type Props = {
  onClick: () => void;
};

export const GoBackButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      startIcon={<ArrowBackIos fontSize="small" />}
    >
      Go back
    </Button>
  );
};
