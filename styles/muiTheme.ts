import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import { green, purple } from '@material-ui/core/colors';
import { Palette } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    palette: Palette;
  }
  // allow configuration using `createMuiTheme`
  interface PaletteOptions {
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      light: string,
      main: string,
      dark: string,
    };
  }
  interface ThemeOptions {
    palette: PaletteOptions | undefined;
  }
}

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  }
});
