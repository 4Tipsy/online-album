import React from 'react';
import {DateSeparator, UrImg} from './components/ImgGridComponents';
import MainMenu from './components/MainMenu';


let test = ['../dataBase/zim.jpg','../dataBase/example_image.jpg','../dataBase/76648.png']


function App () {
  return (
    <>
    <MainMenu />
    <div className='imgs-grid-gap'></div>
    <div className='imgs-grid'>
      <DateSeparator />
      {
        test.map( (el) => <UrImg imgSrc={el}/> )
      }
    </div>
    </>
  )
}

export default App;