import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#4f8e3e',
    },
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;