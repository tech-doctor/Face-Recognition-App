import React  from 'react'
import './ImageLinkForm.css'

 const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className = "f4 center">
                {'This Magic Brain will detect faces in you picture, give it a try'}
            </p>
            <div className= "center">
               <div className = 'pa4 br3 shadow-5 center form'>
                <input 
                 onChange = {onInputChange}
                className = 'f4 pa2 w-70 center' type = 'text'/>
                <button 
                onClick = {onButtonSubmit}
                className = 'w-30 grow f4 link ph3 pv2 dib'>Detect</button>
                </div>
            </div>
        </div>
    ) 
 }
export default ImageLinkForm


// API KEY ::  4373be249351438c849dbf0e40f63f3a