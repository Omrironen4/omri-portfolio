import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hamburger from './components/Hamburger/Hamburger';
import Particles from 'react-tsparticles';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const particlesOptions = {
  background: {
    color: {
      value: "none",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#",
    },
    links: {
      color: "#8B0000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,

}




class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  render(props) {
    return (

      <div className="App">
        <Router>
          <Routes>
            <Route />
            <Route exact path='/' element={props = <Navigation {...props} />} />
            <Route />
            <Route />
          </Routes>
        </Router>

        <Particles className='particles'
          id="tsparticles"
          // init={particlesInit}
          // loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
    )
  }

}

export default App;
