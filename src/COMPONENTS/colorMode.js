import React, { useState, useContext } from 'react';
import { SunIcon, MoonIcon  } from '@chakra-ui/icons';
import { GlobalContext } from '../context/GlobalState';
import '../Styles/ColorMode.scss'


const  ColorMode = () => {
  const { lightMode, toggleTheme } = useContext(GlobalContext);

  const onIconClick = () => {
    toggleTheme();
  }

  const Icon =  () => {
    return lightMode ? <MoonIcon boxSize={'1.3em'} /> : <SunIcon boxSize={'1.3em'} />
  }



  return (
    <div onClick={onIconClick}        className='color_mode'>
       <span >
      <Icon/>
      </span>
      <span className='color_mode_tag' style={{marginLeft: '5px'}}>
      {lightMode? 'Dark Mode' : 'Light Mode'}  
      </span>
    </div>
  );
}

export default ColorMode