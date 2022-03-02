import React from 'react';
import '../../Styles/FaceRecognition.scss'

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className = "face_div center">
      <div className = " face_container absolute">
        {imageUrl? <img  id = "inputimage" alt ="alt" src = {imageUrl}/>: ''}
        
        {box?.map((item, index) => (
          <div className='bounding-box' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}} key={index}></div>
        ))}
      </div>
    </div>
  )
}

export default FaceRecognition
