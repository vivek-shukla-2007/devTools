import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Router dependencies
import { BrowserRouter } from 'react-router-dom';

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);