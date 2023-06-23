import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#f4f1eb',
        //   background     : `radial-gradient(circle, rgba(27,26,26,1) 0%, rgba(24,23,23,1) 180%)`,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        }
      }
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#396471',
    },
    secondary: {
      main: '#547f5e',
    },
    background: {
      default: '#f4f1eb',
      paper: '#f5f0ef',
    },
    text: {
        primary: '#333',
        secondary: 'rgba(51,51,51,0.7)',
        disabled: 'rgba(51,51,51,0.5)',
      },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    h1: {
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Nunito Sans',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Nunito Sans',
      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 200,
    },
    button: {
      fontWeight: 500,
    },
  },
});