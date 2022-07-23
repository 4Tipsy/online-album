import React, {useState} from 'react';


function MainMenu (props) {

  const [menuActivity, setMenuActivity] = useState(false);


  /*let menuClasses
  if (menuActivity == true) {
    menuClasses = 'main-menu'
  } else {
    menuClasses = 'main-menu main-menu_inactive'
  }*/

  return (
    <div className='main-menu' >
    {/*onMouseEnter={()=>{setMenuActivity(menuActivity = true)}}
  onMouseLeave={()=>{setMenuActivity(menuActivity = false)}}>*/}
    
      <div className='logo-container'>
        <div className='logo'/>
      </div>
      <div className='main-menu-separator'/>
      <AccountSection />
      <div className='main-menu-separator'/>
      <div className='btns-section'>

      </div>
      <div className='main-menu-separator'/>
      <div className='last-section'>
      <div className='main-menu-btn'>Click here =)</div>
      </div>
    </div>
  )
}


function AccountSection (props) {
  return (
    <div className='account-and-acc-btns-section'>
        <div className='account-section'>
          <div className='account-img'/>
          <div className='nickname-section'>
            <div className='__nickname'>4Tipsy</div>
            <div className='__separator'/>
            <div className='how-many-imgs'>$no-user</div>
          </div>
        </div>
        <div className='account-btns-section'>
          <div className='main-menu-btn'>Register</div>
          <div className='main-menu-btn'>Log-in</div>
        </div>
      </div>
  )
}

export default MainMenu;