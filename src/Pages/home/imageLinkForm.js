import React, {useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import '../../Styles/ImageLinkForm.scss';
import classes from '../../App.module.scss';

 const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  // const {lightMode} = useContext(GlobalContext);

  // const containerClass = lightMode ? classes.container : classes.dark;
  
  return (
		// <div className = {`${containerClass} image_link`}>
    <div className='image_link'>
			<p className = " align_center">
				<span className='info_1'>This Magic Brain will detect faces in your picture,</span>
				<br/>
				<span className='info_2'> Input an Image link and give it a try...</span>
			</p>
			<div className= " form align_center">
        <form onSubmit={onButtonSubmit}>
          <div className = 'form_div'>
            <input 
            onChange = {onInputChange}
            className = 'form_input' type = 'search' required/>
            <button 
            type='submit'
            className = 'detect_button'>Detect</button>
          </div>
        </form>
			</div>
		</div>
	) 
 }
export default ImageLinkForm
