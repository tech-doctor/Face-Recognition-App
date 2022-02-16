import React from 'react'
import Tilt from 'react-tilt'
//import brain from '../Assets/brain.png';
import '../../Styles/Logo.css'


const  Logo = () =>  {
  return (
    <div className = "tilt_div">
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"><img style= {{paddingTop: '5px'}}  alt = "logo" src='../Assets/brain.png'/></div>
      </Tilt>
    </div>
  )
  
}

export default Logo
