import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './bootstrap.custom.scss';
import './main.css';

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('index'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);