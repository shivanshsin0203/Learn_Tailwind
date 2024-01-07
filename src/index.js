import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bitcoin from './bitcoin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bitcoin />
  </React.StrictMode>
);

