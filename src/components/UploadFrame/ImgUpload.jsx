import React, {useState, useEffect} from "react";
import axios from "axios";
import ReactInputMask from "react-input-mask";



function ImgUpload({currentImg}) {
  
  const [previewImg, setPreviewImg] = useState('');
  const [imgName, setImgName] = useState(currentImg.name);
  const [imgDate, setImgDate] = useState('');
  const [imgTags, setImgTags] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { // making img preview
    let reader = new FileReader()
    reader.readAsDataURL(currentImg)
    reader.onload = () => {
      setPreviewImg(reader.result)
    }
  }, [])

  return (
    <>
      <div className='img-preview' style={{backgroundImage: `url(${previewImg})`}}/>

      <div className='__name-and-tags-zone'>
        <input className='__name-input' type='text' value={imgName} onChange={ (e) => {setImgName(e.currentTarget.value)} }/>
        <div className='__separator'/>
        <input className='__tags-input' type='text' value={imgTags} onChange={ (e) => {setImgTags(e.currentTarget.value)} }
        placeholder='place your tags here (they should start with "#")'/>
      </div>

      <div className='__date-zone'>
        <div>Date: </div>
        <ReactInputMask mask="99/99/9999" maskChar="_" alwaysShowMask={true}
        type='text' className='__date-input' value={imgDate} onChange={ (e) => {setImgDate(e.currentTarget.value)} }/>
        <div className='__set-todays-date-btn' onClick={ () => {setTodaysDate()} }>today's date</div>
            
        <div className='__errors' style={error === '' ? {display: "none"} : {}}>{error}</div>
        <div className='__status'>{status}</div>
      </div>

      <button className='submit-btn' onClick={ () => {handleUploadBtnClick()} } style={{width: '76%', margin: '1vh 0'}}>Upload</button>
    </>
  )


  function setTodaysDate() {
    let today = new Date()
    let todayStringed = today.toLocaleDateString("Eng-uk")

    setImgDate(todayStringed)
  }


  async function handleUploadBtnClick() { // aka handle image upload

    // check if the entered data is correct
    
    if (imgName.length === 0 || imgDate.length === 0 || imgDate.indexOf('_') !== -1) {
      setError('fill all the inputs')

    } else if (! /^[a-zA-Z0-9 \- _ ().)]+$/.test(imgName)) {
      setError('please use only eng letters,  numbers and "-",  "_",  "." symbols in image name')

    } else if (imgTags.length > 0 && !/^[a-zA-Z0-9 /s \- _ #]+$/.test(imgTags) ) {
      setError('use only eng letters, numbers and "#, -, _" symbols in tags names(tags separated with spaces)')

    } else if (imgTags.split(' ').find(j => j[0]!=='#')) {
      setError('not all of your tags start from "#"')

    } else if (imgName.indexOf('.') === -1 || imgName[imgName.length - 1] === '.') {
      setError('it seems like you have not set an extension to the image')

    // if imgName contain spaces, it shouldn't cuz it wont be displayed(some troubles with link to such ones)
    } else if (imgName.indexOf(' ') !== -1) {
      setError('it seems like you have not set an extension to the image')
    

    } else /* if everything is ok */ {
      setError('')

      // grab data to FormData
      let dataToSend = new FormData()
      dataToSend.append('file', currentImg)
      dataToSend.append('name', imgName)
      dataToSend.append('date', imgDate)
      dataToSend.append('tags', imgTags)

      // get auth token
      const token = localStorage.getItem('auth-token')

      // making a request
      try {
        const response = await axios.post( 
          window.SERVER_ADDRESS+'/upload-img',
          dataToSend,
          {headers: {'authorization': `Bearer ${token}`}}
        )

        // if jwt is invalid or...
        // if everything was ok, but img upload failed (server will return reason in resp.data.error)
        if (response.data.error !== 'none') {
          setError(response.data.error)


        // if upload was success!
        } else if (response.data.error === 'none') {
          setError('')
          setStatus('image was uploaded successfully!')
          window.location.reload()


        // if something unexpected happened
        } else {
          setError('Unexpected error: try later')
        }

        // connection error
      } catch (error) {
        console.error(error)
        setError('Connection error: try later')
      }
    }
  }
}



export default ImgUpload