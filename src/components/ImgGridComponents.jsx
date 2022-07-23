import React from 'react';


export function DateSeparator (props) {
  return (
    <div className='date-separator'>
      <div className='__line'></div>
      <div className='__date'>20/07/2022</div>
    </div>
  )
}

export function UrImg (props) {
  return (
    <div className='ur-img-wrapper'>
      <div className='ur-img' 
      style={{backgroundImage: "url("+props.imgSrc+")"}}/>
    </div>
  )
}

