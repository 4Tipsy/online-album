import React, {useState} from 'react';

import ImgsGridInner from './components/ImgsGridInner/ImgsGridInner';
import MainMenu from './components/MainMenu/MainMenu';
import ModalFrame from './components/ModalFrame/ModalFrame';
import SettingsFrame from './components/SettingsFrame/SettingsFrame';



function App() {

  const [modalActive, setModalActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);


  return (
    <>
    <MainMenu isUserLoggedIn={true} setModalActive={setModalActive} setSettingsActive={setSettingsActive}/>

    <div className='imgs-grid-gap'></div>
    <div className='imgs-grid'>
      <ImgsGridInner />
    </div>

    <ModalFrame active={modalActive} setActive={setModalActive}/>
    <SettingsFrame active={settingsActive} setActive={setSettingsActive}/>
    </>
  )
}

export default App;