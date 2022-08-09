import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';
import axios from 'axios';


/* the global vars */

window.SERVER_ADDRESS = 'http://localhost:5000' // used in axios requests
window.USERS_IMGS_FOLDERS = 'users-imgs-folders' // path to folder with folders with imgs // - NOT IN USE


/* --------------- */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);