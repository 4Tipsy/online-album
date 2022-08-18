import React from "react";
import {YouShouldLogIn, TextMassage} from './Massages';
import UrImg from './UrImg'


function ImgsGridImgs({status, imgs, filterMode}) {
  

  function getFilteredImgs(arrayOfImgs) {
    let arrayToReturn = []

    if (filterMode.length > 0) {

      arrayOfImgs.forEach(
        (img) => {
          // push an img if at least one tag matches
          filterMode.some(tag => img.tags.includes(tag))
          && arrayToReturn.push(img)
        }
      )


    } else {
      arrayToReturn = arrayOfImgs
    }

    return arrayToReturn
  }

  

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
        ? <>
          {/* if filtered */}
          {filterMode.length > 0 && <div className="filter-result">{getFilteredImgs(imgs).length} from {imgs.length} showed:</div>}

          {/* images */}
          {getFilteredImgs(imgs).map(img => <UrImg src={img.src} name={img.name} key={img.name}/>)}
        </>



        : <div className='imgs-grid-massage'> <TextMassage>Network error: <br/>try later</TextMassage> </div>
      }
    </>
  )
}



export default ImgsGridImgs