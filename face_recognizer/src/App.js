import React,{Component} from "react";
import "tachyons";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';
import Clarifai from 'clarifai';
import ParticlesBackground from "./components/ParticlesBackground";

const app = new Clarifai.App({
  apiKey:'1d89d60f604d483d819196b41b3e24c6'
});

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:"",
    }
  }
  onInputChange = (event)=>{
    console.log(event.target.value);
  }

  onButtonSubmit =()=>{
    console.log("click"); 
    app.models.predict("6dc7e46bc9124c5c8824be4822abe105","https://samples.clarifai.com/metro-north.jpg").then(
        function(response){
          console.log(response)
        },
        function(err){
          // there was an error
        }
    );
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
        <FaceRecognition /> 
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