import { createTheme } from "@mui/material/styles";

export function getMuiTheme(tokens: any) {
  return createTheme({
    palette: {
      primary: {
        main: tokens.primary?.[500],
      },
      secondary: {
        main: tokens.secondary?.[500],
      },
      background: {
        default: tokens.background,
      },
      text: {
        primary: tokens.foreground,
      },
    },
  });
}