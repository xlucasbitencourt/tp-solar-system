import React from 'react';
import './App.css';
import Header from './components/Header'; // requisito 1 - importar o arquivo para poder trabalhar com ele
import SolarSystem from './components/SolarSystem'; // requisito 2
import Missions from './components/Missions'; // requisito 7

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
