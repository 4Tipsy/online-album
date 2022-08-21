import React, {useState, useEffect} from 'react';
import axios from 'axios';

// components
import ImgsGrid from './components/ImgsGrid/ImgsGrid';
import MainMenu from './components/MainMenu/MainMenu';
import ModalFrame from './components/ModalFrame/ModalFrame';
import SettingsFrame from './components/SettingsFrame/SettingsFrame';
import UploadFrame from './components/UploadFrame/UploadFrame';
import ViewImgFrame from './components/ViewImgFrame/ViewImgFrame';




function App() {

  const [modalActive, setModalActive] = useState(false);
  const [uploadActive, setUploadActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [viewImg, setViewImg] = useState(''); // <-- will contain img data

  const [tagsActive, setTagsActive] = useState(true);

  const [urImgsStatus, setUrImgsStatus] = useState("loading");
  const [urImgs, setUrImgs] = useState([]);
  const [userInfo, setUserInfo] = useState({"userIsLogged": false, "nickname": "$no-user", "imgsAmount": "$no-user", "profileImg": ""});


  useEffect(() => {
    userEntry() // setting urImgs and userInfo
    
  }, [])

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
      setSettingsActive={setSettingsActive} tagsActive={tagsActive} setTagsActive={setTagsActive}/>

      <ImgsGrid imgs={urImgs} status={urImgsStatus} tagsActive={tagsActive} setViewImg={setViewImg}/>

      {viewImg && <ViewImgFrame viewImg={viewImg} setViewImg={setViewImg}/>}


      <ModalFrame active={modalActive} setActive={setModalActive}/>
      <SettingsFrame active={settingsActive} setActive={setSettingsActive}/>

      <UploadFrame active={uploadActive} setActive={setUploadActive}/>
      {userInfo.userIsLogged && <div className='upload-frame-trigger' onClick={ () => {setUploadActive(true)} }/>}
    </>
  )
}

export default App;