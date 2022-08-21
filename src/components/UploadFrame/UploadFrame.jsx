import React, {useState} from 'react';


import ImgInput from './ImgInput';
import ImgUpload from './ImgUpload';


function UploadFrame({active, setActive}) {
  
  const [img, setImg] = useState('');

  return (
    <div className={active ? 'upload-frame-wrapper _active' : 'upload-frame-wrapper'} 
    onClick={ () => {setActive(false); setImg('')} }>
      <div className='upload-frame' onClick={e => e.stopPropagation()}>

        {img ? <ImgUpload currentImg={img}/> : <ImgInput setImg={setImg}/>}

      </div>
    </div>
  )
}









export default UploadFrame