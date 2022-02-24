import React, {Component } from 'react';
import Clarifai from 'clarifai';
import { TransverseLoading } from 'react-loadingg';
import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import Navigation from '../../COMPONENTS/Navigation';
import Rank from '../../COMPONENTS/Rank';
import { app } from '../../COMPONENTS/api';
import Logo from './logo';
import ImageLinkForm from './imageLinkForm';
import FaceRecognition from './faceRecognition';
import ColorMode from '../../COMPONENTS/colorMode';



class Home extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      responseMessage:  '',
      isLoggedIn: false,
    }  
  }


  calculateFaceLocation = (data, i) => {
    const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    const image  = document.getElementById('inputimage'); 
    const width  = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol:clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),    
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  


   conditionMessages = (result) => {
     console.log(result.length)
     if(result.length > 1){
      return(
       <div className='font_600'>
         <p>{result.length} Faces Detected <CheckIcon/>
         </p> 
        </div>)
     }else if(result.length = 1){
      return(
        <div>
          <p>Face Detected <CheckIcon/></p>
        </div>)
     }else{
        return <div><p style = {{color: 'red'}}> <InfoOutlineIcon color = 'red'/> No Face Detected, Try again!</p></div>
     }
  }

  detecting = () => {
    return(
      <div className='Detecting'>
       <span><TransverseLoading speed = {1} color = 'rgb(155, 255, 155)' /></span>
      </div>
    )
  }

  displayFaceBox = (faceArea) => {
    this.setState({
      box: [...this.state.box, faceArea]
    });
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  
  onButtonSubmit = (event) => {
    event.preventDefault();
    const {input,responseMessage} = this.state;
    this.setState({ imageUrl: input});
    //NOTE: here is the code from the Clarifai API documentation
    this.setState({responseMessage: this.detecting()});
    app.models.predict( Clarifai.FACE_DETECT_MODEL, input)
    .then(response => {
       const result = response.outputs[0].data.regions;
      for(let i = 0; i < result.length; i++){
        this.displayFaceBox(this.calculateFaceLocation(response, i))
      }
  
      this.setState({responseMessage: this.conditionMessages(result)});
    })
      .catch(err => {
        this.setState({responseMessage: <div><p style = {{color: 'red'}}> <InfoOutlineIcon color = 'red'/> No Face Detected.</p></div>})
      });
  }


  render(){
    const {isLoggedIn,imageUrl, box, loading,faceDetected} = this.state
    return (
      <div className="App">
      {/* <Navigation isLoggedIn={isLoggedIn}/> */}
        <ColorMode/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onButtonSubmit = {this.onButtonSubmit}
        onInputChange = {this.onInputChange}/> 
        <div className='align_center margin_top_small'>
          {this.state.responseMessage}
        </div>
        <FaceRecognition
          imageUrl = {imageUrl}
          box = {box}
        />
      </div>
    ) 
  }  
}


export default Home;