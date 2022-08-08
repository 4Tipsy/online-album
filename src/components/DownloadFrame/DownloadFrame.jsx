import React, {useEffect, useState} from 'react';


import ImgInput from './ImgInput';
import ImgUpload from './ImgUpload';


function DownloadFrame({active, setActive}) {
  
  const [img, setImg] = useState('');

  return (
    <div className={active ? 'download-frame-wrapper _active' : 'download-frame-wrapper'} 
    onClick={ () => {setActive(false); setImg('')} }>
      <div className='download-frame' onClick={e => e.stopPropagation()}>

        {img ? <ImgUpload currentImg={img}/> : <ImgInput setImg={setImg}/>}

      </div>
    </div>
  )
}









export default DownloadFrame