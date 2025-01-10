import { createTheme } from "@mui/material/styles";
import { Colors } from "./constants/Colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: Colors.primary,
        },
      },
      variants: [
        {
          props: { variant: "h4" },
          style: {
            fontWeight: 600,
          },
        },
        {
          props: { variant: "subtitle2" },
          style: {
            fontWeight: 600,
            fontSize: 18,
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          backgroundColor: Colors.textFieldBackgroundColor,
          color: Colors.placeholderColor,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        size: "small",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
