import React, {Component } from 'react';
import Clarifai from 'clarifai';
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
      isLoggedIn: false
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
  


  displayFaceBox = (faceArea) => {
    //console.log(location)
    this.setState({
      box: [...this.state.box, faceArea]
    });
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  
  onButtonSubmit = (event) => {
    event.preventDefault();
    const {input} = this.state;
    this.setState({ imageUrl: input});
    //NOTE: here is the code from the Clarifai API documentation
    app.models.predict( Clarifai.FACE_DETECT_MODEL, input)
    .then(response => {
      for(let i = 0; i < response.outputs[0].data.regions.length; i++){
        this.displayFaceBox(this.calculateFaceLocation(response, i))
      }
    })
      .catch(err => console.log(err));
  }


  render(){
    const {isLoggedIn,imageUrl, box} = this.state
    return (
      <div className="App">
      {/* <Navigation isLoggedIn={isLoggedIn}/> */}
        <ColorMode/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onButtonSubmit = {this.onButtonSubmit}
        onInputChange = {this.onInputChange}/> 
        <FaceRecognition
          imageUrl = {imageUrl}
          box = {box}
        />
      </div>
    ) 
  }  
}


export default Home;