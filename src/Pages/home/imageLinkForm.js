import React  from 'react'
import '../../Styles/ImageLinkForm.scss'

 const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
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
            className = 'form_input' type = 'text' required/>
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
