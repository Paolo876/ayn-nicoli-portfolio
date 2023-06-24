import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from "./context/AuthContext";
import { theme } from "./materialTheme";
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
