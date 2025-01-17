import { Box, Typography } from "@mui/material";
import { Colors } from "../../constants/Colors";

type Props = {
  label: string;
  value: number;
};

export const Stat = ({ label, value }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
      bgcolor="white"
      width={40}
      height={65}
      borderRadius={5}
    >
      <Box
        width={30}
        height={30}
        borderRadius={15}
        bgcolor={Colors[label as keyof typeof Colors]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="subtitle2" color="white">
          {label}
        </Typography>
      </Box>
      <Typography fontWeight={600}>{value}</Typography>
    </Box>
  );
};
