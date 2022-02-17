import React, { useState } from 'react';
import '../Styles/ColorMode.css'
import { SunIcon, MoonIcon  } from '@chakra-ui/icons';

const  ColorMode = () => {
  const [lightMode, setLightMode] = useState(true);
  const onIconClick = () => {
    setLightMode(!lightMode)
  }

  return (
    <div onClick={onIconClick}  className='color_mode'>
      {lightMode? <MoonIcon boxSize={'1.3em'}/> : 
      <SunIcon  boxSize={'1.3em'}/>}   
    </div>
  );
}

export default ColorMode