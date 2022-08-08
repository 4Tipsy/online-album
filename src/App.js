import React, {useState} from 'react';

// components
import ImgsGridInner from './components/ImgsGridInner/ImgsGridInner';
import MainMenu from './components/MainMenu/MainMenu';
import ModalFrame from './components/ModalFrame/ModalFrame';
import SettingsFrame from './components/SettingsFrame/SettingsFrame';
import DownloadFrame from './components/DownloadFrame/DownloadFrame';





function App() {

  const [modalActive, setModalActive] = useState(false);
  const [downloadActive, setDownloadActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);


  return (
    <>
      <MainMenu isUserLoggedIn={true} setModalActive={setModalActive} 
      setSettingsActive={setSettingsActive}/>

      <div className='imgs-grid-gap'/>
      <div className='imgs-grid'>
        <ImgsGridInner />
      </div>

      <ModalFrame active={modalActive} setActive={setModalActive}/>
      <SettingsFrame active={settingsActive} setActive={setSettingsActive}/>

      <DownloadFrame active={downloadActive} setActive={setDownloadActive}/>
      <div className='download-frame-trigger' onClick={ () => {setDownloadActive(true)} }/>
    </>
  )
}

export default App;