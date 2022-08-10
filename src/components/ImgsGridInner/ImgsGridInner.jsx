import React, {useEffect, useState} from 'react';
import axios from "axios";
import {YouShouldLogIn, TextMassage} from './ImgsGridInnerMassages';


function ImgsGridInner({status, imgs}) {


  return (
    <>

      {
        status === "loading"
        ? <div className='imgs-grid-massage'> <TextMassage>Loading...</TextMassage> </div>

        : status === "no-user"
        ? <div className='imgs-grid-massage'> <YouShouldLogIn/> </div>

        : status === "invalid-jwt"
        ? <div className='imgs-grid-massage'> <YouShouldLogIn/> <TextMassage>Error: invalid JWT token <br/>Please log-in again</TextMassage> </div>

        : status === "success"
        ? imgs.concat().map(img => <UrImg src={img.src} name={img.name} key={img.name}/>)

        : <div className='imgs-grid-massage'> <TextMassage>Network error: <br/>try later</TextMassage> </div>
      }

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

function UrImg({src, name}) {
  return (
    <div className='ur-img-wrapper'>
      <div className='ur-img' 
      style={{backgroundImage: "url("+src+")"}}>

        <div className='__name'>
          <div>{name}</div>
        </div>

      </div>
    </div>
  )
}


export default ImgsGridInner