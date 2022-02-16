import React  from 'react'
import '../../Styles/ImageLinkForm.css'

 const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className = "center">
				{'This Magic Brain will detect faces in you picture, give it a try'}
			</p>
			<div className= "center">
      <form onSubmit={onButtonSubmit}>
				<div className = ' center form'>
          <input 
          onChange = {onInputChange}
          className = ' center' type = 'text'/>
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
