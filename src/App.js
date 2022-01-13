import React, { Component } from 'react';
import Navigation from './COMPONENTS/Navigation/Navigation'
import Logo from './COMPONENTS/Logo/Logo'
import ImageLinkForm from './COMPONENTS/ImageLinkForm/ImageLinkForm'
import Rank from './COMPONENTS/Rank/Rank'
import LogIn from './COMPONENTS/LogIn/LogIn'
import SignUp from './COMPONENTS/SignUp/SignUp'
import FaceRecognition from './COMPONENTS/FaceRecognition/FaceRecognition'
import  Clarifai from 'clarifai'
import './App.css'

// code from the API documentation
const app = new Clarifai.App({
  apiKey: '4373be249351438c849dbf0e40f63f3a'
 });

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: '',
      route: 'home',
      box: {},
      isLoggedIn: !false
    }  
  }

  calculateFaceLocation = (data) => {
    console.log(data)
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputimage'); 
   const width = Number(image.width);
   const height = Number(image.height)
   return{
      leftCol:clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),    
      bottomRow: height - (clarifaiFace.bottom_row * height)
   } 
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    //NOTE: here is the code from the Clarifai API documentation
    app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input)

    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))

      .catch(err => console.log(err));
  }

  onRouteChange =(route) => {
   if (route === 'logout')  {
    this.setState({isLoggedIn: false})
   }
   else if(route === 'home') {
    this.setState({isLoggedIn: true})  
   } 
    this.setState({route: route})
  }


  render(){
    const {isLoggedIn, route} = this.state
  return (
    <div className="App">
     <Navigation isLoggedIn={isLoggedIn} onRouteChange = {this.onRouteChange}/>

    {route === "home"
     ? <div> <Logo/>
     <Rank/>
     <ImageLinkForm 
     onButtonSubmit = {this.onButtonSubmit}
     onInputChange = {this.onInputChange}/> 

     <FaceRecognition
       imageUrl = {this.state.imageUrl}
       box = {this.state.box}
     /> 
     </div>

     : (
       this.state.route ==='login' ?
     <LogIn onRouteChange = {this.onRouteChange}/>
     :<SignUp onRouteChange ={this.onRouteChange}/>)
     }
     
    </div>
  )
    }
  
  }

export default App;
