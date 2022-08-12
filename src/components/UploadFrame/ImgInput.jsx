import React, {useState} from "react";



function ImgInput({setImg}) {

  const [drag, setDrag] = useState(false);
  const [error, setError] = useState('');


  function handleDragStart(e) {
    e.preventDefault()
    setDrag(true)
  }
  function handleDragLeave(e) {
    e.preventDefault()
    setDrag(false)
  }

  // choose image to upload
  function handleDrop(e) { // by drag and drop
    e.preventDefault()
    setDrag(false)

    const img = [...e.dataTransfer.files][0]
    
    if (img.type.split('/')[0] === 'image') { 
      setImg(img)
    } else {
      let tmp = img.name.length > 20 ? img.name.slice(0, 20)+'....' : img.name
      setError(`The ${tmp} is not an image`)
    }
  }
  function handleSimpleInput(e) { // by simple input
    const img = e.currentTarget.files[0]

    if (img.type.split('/')[0] === 'image') {
      setImg(img)
    } else {
      let tmp = img.name.length > 20 ? img.name.slice(0, 20)+'....' : img.name
      setError(`The ${tmp} is not an image`)
    }
  }

  return (
    <div className='inputs-wrapper'>
      {drag
      ? <div className='__drag-and-drop' style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}
        onDragStart={e => handleDragStart(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDragOver={e => handleDragStart(e)}
        onDrop={e => handleDrop(e)}
      >Drop the image here</div>

      : <div className='__drag-and-drop'
        onDragStart={e => handleDragStart(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDragOver={e => handleDragStart(e)}
      >Drag the image here</div>
      }

      <input type='file' id='inp-at-dwnld-frm' style={{display: 'none'}} onChange={e => handleSimpleInput(e)}/>
      <div className='__bottom-section'>
        <label className='__simple-input' htmlFor='inp-at-dwnld-frm'>Chose img</label>
        <div className='__errors'>{error}</div>
      </div>
    </div>
  )
}




export default ImgInput