import React from 'react';
import Login from './Login';
import Register from './Register';
import OtherOptions from './OtherOptions';


function ModalFrame({active, setActive}) {


  return (
    <div className={active ? 'modal-frame-wrapper _active' : 'modal-frame-wrapper'} 
    onClick={ () => {setActive(false)} }>
      <div className='modal-frame' onClick={e => e.stopPropagation()}>

        {
          active === "register"
          ? <Register setActive={setActive}/>
          : active === "log-in"
          ? <Login setActive={setActive}/>
          : active === "other-options"
          ? <OtherOptions setActive={setActive}/>
          : <></>
        }

      </div>
    </div>
  )
}





export default ModalFrame