import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css'; // Optional: for global styling

// Render the App component wrapped with BrowserRouter
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') // This should match the id of the root element in your HTML
);
