import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from "./materialTheme";
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
