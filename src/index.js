import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';



/* the global vars */

window.SERVER_ADDRESS = 'http://localhost:3030' // used in axios requests (change to site's domen in production [with no "/" at the end])

window.LINKS = {
  // links are now used in: ModalFrame.jsx
  'meAtGitHub': 'https://github.com/4Tipsy',
  'appsRepo': 'https://github.com/4Tipsy/online-album',
  'appsDocs': 'https://github.com/4Tipsy/online-album/blob/main/documentation.md',
  'appsUserManual': 'https://github.com/4Tipsy/online-album/blob/main/user-manual.md',
}
/* --------------- */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)