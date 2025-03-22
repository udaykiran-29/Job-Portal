import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import './styles/globals.css';

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches the ID in your HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);