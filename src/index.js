import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';



/* the global vars */

window.SERVER_ADDRESS = 'http://localhost:5000' // used in axios requests

/* --------------- */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);