import React,{Component} from "react";
import "tachyons";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';
import Clarifai, { COLOR_MODEL } from 'clarifai';
import ParticlesBackground from "./components/ParticlesBackground";


// import {Clarifai} from "clarifai-nodejs-grpc";

// const app = ClarifaiStub.app();


const app = new Clarifai.App({
  apiKey:"1d89d60f604d483d819196b41b3e24c6"
});

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:"",
      imageUrl:"",
      box:{}// contains values we received
    }
  }

  calculateFaceLocation = (data)=>{
    const clarfaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    return {
      leftCol:clarfaiFace.left_col * width,
      topRow:clarfaiFace.top_row * height,
      rightCol:width - (Clarifai.right_col * width),
      bottomRow:height - (clarfaiFace.bottom_row * height)
    } // first dot, second, third and fourth;
  }

  displayFaceBox = (box)=>{
    this.setState({box:box})
  }
  onInputChange = (event)=>{
    
    this.setState({input:event.target.value});
  }

  onButtonSubmit =()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response=>this.calculateFaceLocation(response))
      .catch(err=>console.log(err));
  }

  render(){
    

    return(
      <div className="App">

      <ParticlesBackground className="particles"
      />

        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} /> 
        {/* 
          // before we start big part
          1.This is going to be hard. 
          2.the project works
          3.follow my method.
          4.Grpc
          5.Modelid.
        */}
        
      </div>
    )
  }
}

export default App;