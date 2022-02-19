import { createTheme } from "@mui/material";
import { palette } from "@mui/system";

const lightTheme = createTheme({
  palette: {
    background: '#fff',
    primary: {
      main: '#333333',
      light: '#fff',
    },
    secondary: {
      light: '#f3f4f5',
      main: '#e9eaec',
      dark: '#919294',
    },
  },
  typography: {
    body1: {
      fontSize: '14px',
      color: '#919294',
    },
    body2: {
      fontSize: '14px',
      color: '#333333',
    },
    caption: {
      fontSize: '12px',
      color: '#919294',
    },
    h1: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333333',
    },
    h2: {
      fontSize: '16px',
      color: '#919294',
    },
    btn: {
      fontSize: '14px',
      color: '#fff',
      textTransform: 'none',
    },
    table: {
      head: {
        fontSize: '12px',
        color: '#919294',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
      body: {
        fontSize: '14px',
        color: '#919294',
      }
    }
  },
});

export default lightTheme;
