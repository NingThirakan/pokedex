import { Box, Button, AppBar as MuiAppBar, Toolbar } from '@mui/material';
import pokeball from '../../assets/icons/pokeball.png';

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <img src={pokeball} alt="Pokeball" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}
