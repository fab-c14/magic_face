import React,{Component} from "react";
import "tachyons";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from './components/Rank/Rank';
import './App.css';

import ParticlesBackground from "./components/ParticlesBackground";



class App extends Component{
  render(){
    

    return(
      <div className="App">

      <ParticlesBackground className="particles"
      />

        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm/>
        {/* 

        <FaceRecognition /> 
        */}
        
      </div>
    )
  }
}

export default App;