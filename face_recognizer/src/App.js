
// import Particles from "react-tsparticles-js"; 
import React,{Component} from "react";
import "tachyons";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-tsparticles';




class App extends Component{
  render(){

    return(
      <div className="App">
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 100
                  },
                  "size": {
                      "value": 45
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
          }} />
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
