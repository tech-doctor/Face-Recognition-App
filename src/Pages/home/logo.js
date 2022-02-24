import React, {useContext} from 'react'
import Tilt from 'react-tilt'
import { GlobalContext } from '../../context/GlobalState'
import '../../Styles/Logo.scss'


const  Logo = () =>  {
  const { lightMode } = useContext(GlobalContext);
  const logoClass = lightMode ? 'Tilt' : ' Tilt Dark_Tilt ';

  return (
    <div className = "tilt_div">
      <Tilt className= {logoClass} options={{ max : 55 }} >
        <div className="Tilt-inner"><img  alt = "logo" src='../Assets/brain.png'/></div>
      </Tilt>
    </div>
  )
  
}

export default Logo
