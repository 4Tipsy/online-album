import React from 'react';
import {YouShouldLogIn, TextMassage} from './ImgsGridInnerMassages';
import UrImg from './UrImg'


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

/* i dunno if it will be used or not

function DateSeparator(props) {
  return (
    <div className='date-separator'>
      <div className='__line'></div>
      <div className='__date'>20/07/2022</div>
    </div>
  )
}
*/







export default ImgsGridInner