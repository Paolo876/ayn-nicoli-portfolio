import React from 'react';
import { AuthContextProvider } from "./context/AuthContext";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AuthContextProvider><App /></AuthContextProvider>);

// root.render(
//   // <React.StrictMode>
//     <AuthContextProvider>
//       <App />

//     </AuthContextProvider>
//   // </React.StrictMode>,
//   ,document.getElementById('root')
// );

/*
react-router-dom
firebase 9
aos(animate on scroll)
framer-motion
*/