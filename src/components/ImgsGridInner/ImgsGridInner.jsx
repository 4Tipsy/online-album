import React, {useEffect, useState} from 'react';
import axios from "axios";



function ImgsGridInner() {

  async function fetchImgs() {

    const response = await axios.get('http://localhost:5000/get-imgs')
    setImgs( response.data )
  }


  const [imgs, setImgs] = useState('loading');

  useEffect(() => {
    fetchImgs()

  }, []);


  return (
    <>
      {imgs === 'loading'
      ? <h1 style={{color: '#fff'}}>loading...</h1>
      : imgs.concat().map(el => <UrImg imgUrl={el.src} imgName={el.name} key={el.name}/>)}
    </>
  )
}


function DateSeparator(props) {
  return (
    <div className='date-separator'>
      <div className='__line'></div>
      <div className='__date'>20/07/2022</div>
    </div>
  )
}

function UrImg({imgUrl, imgName}) {
  return (
    <div className='ur-img-wrapper'>
      <div className='ur-img' 
      style={{backgroundImage: "url("+imgUrl+")"}}>

        <div className='__name'>
          <div>{imgName}</div>
        </div>

      </div>
    </div>
  )
}


export default ImgsGridInner