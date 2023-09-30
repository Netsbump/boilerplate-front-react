import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#FBFBFA' },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#bb86fc' },
    secondary: { main: '#03dac6' },
    background: {
      default: '#121212',
      paper: '#1f1f1f',
    },
    text: {
      primary: '#e1e1e1',
      secondary: '#b3b3b3',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212',
        },
      },
    },
  },
});

const accessibilityTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#4caf50' },
    secondary: { main: '#ff9100' },
    contrastThreshold: 4.5,
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: 'Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 0, // Pour rendre les éléments plus distincts sans bordures arrondies
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, // Supprime l'effet "ripple" pour améliorer la performance
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'grey', // Ici, vous spécifiez la couleur de fond du body pour le thème clair
        },
      },
    },
  },
});

const dyslexicTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f5f5f5', paper: '#e8e8e8' },
  },
  typography: {
    fontSize: 18,
    fontFamily: 'OpenDyslexic, Arial, sans-serif',
    body1: {
      lineHeight: 1.5,
      letterSpacing: 0.5,
    },
  },
});

export { lightTheme, darkTheme, accessibilityTheme, dyslexicTheme };
