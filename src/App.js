import React, {useState} from 'react';

import ImgsGridInner from './components/ImgsGridInner';
import MainMenu from './components/MainMenu';
import ModalFrame from './components/ModalFrame';



function App () {

  const [modalFrameActive, setModalFrameActive] = useState(false);


  return (
    <>
    <MainMenu isUserLoggedIn={true}/>

    <div className='imgs-grid-gap'></div>
    <div className='imgs-grid'>
      <ImgsGridInner />
    </div>

    <ModalFrame active={true} whichFrame={'register'}/>
    </>
  )
}

export default App;