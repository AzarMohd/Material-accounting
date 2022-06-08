import React from 'react'
import "./Screen.css";
import Login from './Login';
const Screen = () => {
  return (

    <div className='main'>
      <div className="saint">
        <img id="saint" alt="saint" src='assets/images/white_logo.png' />
      </div>
      <div className='Develop'>
        <p>Development Environment</p>
      </div>
      <div className="png">
        <img alt="png" src='assets/images/ori-logistics.png' />
      </div>
      <div>
        <Login />
      </div>
      <div className="glass" >
        <img alt="glass" src='assets/images/left_glass_new.png' />
      </div>
    </div>

  )
}

export default Screen;