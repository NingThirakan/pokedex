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
      defaultProps: {
        variant: "body2",
      },
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
          props: { variant: "h6" },
          style: {
            fontWeight: 600,
          },
        },
        {
          props: { variant: "body1" },
          style: {
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: 14,
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontWeight: 600,
            fontSize: 18,
          },
        },
        {
          props: { variant: "subtitle2" },
          style: {
            fontWeight: 600,
            fontSize: 14,
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
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
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
