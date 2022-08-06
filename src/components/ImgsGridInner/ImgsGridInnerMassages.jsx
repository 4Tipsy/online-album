import React, { Children } from "react";


function YouShouldLogIn() {
  
  return (
    <div className="you-should-log-in">
      <div className="__text">To use the album</div>
      <div className="__line"></div>
      <div className="__text">you should log-in</div>
    </div>
  )
}

function TextMassage({children}) {
  
  return (
    <div className="text-massage">
      {children}
    </div>
  )
}



export {YouShouldLogIn, TextMassage}