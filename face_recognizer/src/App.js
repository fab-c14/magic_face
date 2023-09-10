import React, {Component} from "react";
// import Particles from "react-tsparticles-js"; 

import "tachyons";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from './components/Rank/Rank';
import './App.css'
import Particles from 'react-particles';

const particleOptions = {
  particles:{
    
      number:{
         value:30,
         density:{
          enable:true,
          value_area:800
         }
    }
  }
}
class App extends Component{
  render(){

    return(
      <div className="App">
       <Particles 
                params={particleOptions} />

        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm/>
        {/* 

        <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
