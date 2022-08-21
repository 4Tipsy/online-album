import React from "react";
import axios from "axios";


function UrImg({img, setViewImg}) {


  async function deleteImg() {
    if (window.confirm(`Delete ${img.name}?`)) {

      // get auth token
      const token = localStorage.getItem('auth-token')

      // if no token
      if (!token) {
        alert('JWT error, log-in again please')
    
      // if token exists
      } else {
        try {
          
          // making a request

          let dataToSend = {}
          dataToSend.imgSrc = img.src // <-- props.src

          const response = await axios.post(
            window.SERVER_ADDRESS + '/delete-img',
            dataToSend,
            {headers: {'authorization': `Bearer ${token}`}}
          )

          // handling a response

          if (response.data === "success") {
            window.location.reload()

          } else if (response.data === "invalid-jwt") {
            alert('JWT is invalid, log-in again please')

          } else {
            alert('server error: try later')
            console.error(response.data)
          }


        // if axios error
        } catch (error) {
          alert('Network error: try later')
          console.error(error)
        }
      }
    }
  }



  return (
    <div className='ur-img-wrapper'>
      <div className='ur-img' onClick={() => {setViewImg(img)} }
      style={{backgroundImage: "url("+img.src+")"}}>

        <div className='__name' onClick={e => e.stopPropagation()}>
          <div>{img.name}</div>
        </div>
        <div className='__options' onClick={e => e.stopPropagation()}>

          {/* download */}
          <a className='ur-img-option-btn __download' href={img.src} download>
            <svg viewBox="0 0 748 704" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M367.7 501C368.448 501.956 369.404 502.729 370.496 503.261C371.588 503.793 372.786 504.069 374 504.069C375.214 504.069 376.412 503.793 377.504 503.261C378.595 502.729 379.552 501.956 380.3 501L492.3 359.3C496.4 354.1 492.7 346.4 486 346.4H411.9V8C411.9 3.6 408.3 0 403.9 0H343.9C339.5 0 335.9 3.6 335.9 8V346.3H262C255.3 346.3 251.6 354 255.7 359.2L367.7 501ZM740 466H680C675.6 466 672 469.6 672 474V628H76V474C76 469.6 72.4 466 68 466H8C3.6 466 0 469.6 0 474V672C0 689.7 14.3 704 32 704H716C733.7 704 748 689.7 748 672V474C748 469.6 744.4 466 740 466Z" fill="#DADADA"/></svg>
          </a>
          {/* delete */}
          <div className='ur-img-option-btn __delete' onClick={ () => {deleteImg()} }>
            <svg viewBox="0 0 72 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69 13.5H57V6C57 2.69063 54.3094 0 51 0H21C17.6906 0 15 2.69063 15 6V13.5H3C1.34063 13.5 0 14.8406 0 16.5V19.5C0 19.9125 0.3375 20.25 0.75 20.25H6.4125L8.72813 69.2812C8.87813 72.4781 11.5219 75 14.7188 75H57.2813C60.4875 75 63.1219 72.4875 63.2719 69.2812L65.5875 20.25H71.25C71.6625 20.25 72 19.9125 72 19.5V16.5C72 14.8406 70.6594 13.5 69 13.5ZM50.25 13.5H21.75V6.75H50.25V13.5Z" fill="#DADADA"/></svg>
          </div>
          {/* 4 deco reasons */}
          <div className="__gap"></div>
        </div>

      </div>
    </div>
  )
}



export default UrImg