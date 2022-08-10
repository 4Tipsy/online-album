import React, {useState, useEffect} from 'react';
import axios from 'axios';

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

  const [urImgsStatus, setUrImgsStatus] = useState("loading");
  const [urImgs, setUrImgs] = useState([]);
  const [userInfo, setUserInfo] = useState({"userIsLogged": false, "nickname": "$no-user", "imgsAmount": "$no-user", "profileImg": ""});


  useEffect(() => {
    userEntry() // setting urImgs and userInfo
    
  }, []);
  async function userEntry() {

    // get auth token
    const token = localStorage.getItem('auth-token')
  
    // if no token
    if (!token) {
      setUrImgsStatus('no-user')
  
    // if token exists
    } else {
      try {
        const response = await axios.get(
          window.SERVER_ADDRESS + '/user-entry',
          {headers: {'authorization': `Bearer ${token}`,'Content-Type': 'application/json'}}
        )
  
        const {status, imgs, userInfo} = (response.data)


        setUrImgsStatus(status)
        imgs && setUrImgs(JSON.parse(imgs))
        userInfo && setUserInfo(userInfo)
  
      // if fetch failed
      } catch (error) {
        setUrImgsStatus(error)
        console.error(error)
      }
    }
  }




  return (
    <>
      <MainMenu userInfo={userInfo} setModalActive={setModalActive} 
      setSettingsActive={setSettingsActive}/>

      <div className='imgs-grid-gap'/>
      <div className='imgs-grid'>
        <ImgsGridInner imgs={urImgs} status={urImgsStatus}/>
      </div>

      <ModalFrame active={modalActive} setActive={setModalActive}/>
      <SettingsFrame active={settingsActive} setActive={setSettingsActive}/>

      <DownloadFrame active={downloadActive} setActive={setDownloadActive}/>
      {userInfo.userIsLogged && <div className='download-frame-trigger' onClick={ () => {setDownloadActive(true)} }/>}
    </>
  )
}

export default App;