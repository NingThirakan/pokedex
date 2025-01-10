import { Box, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import pokeball from "../../assets/icons/pokeball.png";

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" color="secondary">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={pokeball} alt="Pokeball" width={40} />
          </Box>
          {/* <Person fontSize="large" /> */}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
