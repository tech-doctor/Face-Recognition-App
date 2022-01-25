import React from 'react';
import '../../Styles/FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className = "center">
      <div className = " absolute">
        <img id = "inputimage" alt ="" src = {imageUrl}  width = "500px" height = "auto"/>
        {box.map((item, index) => (
          <div className='bounding-box' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}} key={index}></div>
        ))}
        </div>
    </div>
  )
}

export default FaceRecognition
