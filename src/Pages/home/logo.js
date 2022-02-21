import React from 'react'
import Tilt from 'react-tilt'
//import brain from '../Assets/brain.png';
import '../../Styles/Logo.scss'


const  Logo = () =>  {
  return (
    <div className = "tilt_div">
      <Tilt className="Tilt" options={{ max : 55 }} >
        <div className="Tilt-inner"><img  alt = "logo" src='../Assets/brain.png'/></div>
      </Tilt>
    </div>
  )
  
}

export default Logo
