import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthContextProvider } from "./context/AuthContext";
import { createRoot } from 'react-dom/client';
import { theme } from "./materialTheme";
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App';


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


/*
react-router-dom
firebase 9
aos(animate on scroll)
framer-motion
*/