import { Grid2 as Grid, Typography } from "@mui/material";
import _ from "lodash";
import { TextContentType } from "../../@types/TextContent";

type Props = TextContentType;

export const TextContent = ({ label, value, component }: Props) => {
  return (
    <Grid container spacing={1} pt={1}>
      <Grid size={3}>
        <Typography variant="subtitle2">{_.toUpper(label)}</Typography>
      </Grid>
      <Grid size={8}>
        {component ? component : <Typography>{value}</Typography>}
      </Grid>
    </Grid>
  );
};
