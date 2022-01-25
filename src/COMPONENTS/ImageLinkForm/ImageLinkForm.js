import React  from 'react'
import '../../Styles/ImageLinkForm.css'

 const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className = "center">
				{'This Magic Brain will detect faces in you picture, give it a try'}
			</p>
			<div className= "center">
				<div className = ' center form'>
				<input 
					onChange = {onInputChange}
				className = ' center' type = 'text'/>
				<button 
				onClick = {onButtonSubmit}
				className = 'detect_button'>Detect</button>
				</div>
			</div>
		</div>
	) 
 }
export default ImageLinkForm
