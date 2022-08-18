import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';



/* the global vars */

window.SERVER_ADDRESS = 'http://online-album.uxp.ru' // used in axios requests (change to site's domen in production [with no "/" at the end])

/* --------------- */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);