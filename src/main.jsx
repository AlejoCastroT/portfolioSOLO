// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav/Nav';
import Inicio from './Inicio/Inicio';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Inicio />
  </React.StrictMode>
);
