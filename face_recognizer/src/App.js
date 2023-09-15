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