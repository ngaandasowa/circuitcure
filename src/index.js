import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css'; // Ensure this file exists and contains your styles
import App from './App'; // Ensure this file exists and exports a valid React component
import reportWebVitals from './reportWebVitals';

// Create a root element and render the app

const root = ReactDOM.createRoot(document.getElementById('root'));
document.cookie = "name=value; SameSite=Lax";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
