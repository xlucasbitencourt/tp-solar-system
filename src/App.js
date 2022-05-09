import React from 'react';
import Header from './components/Header'; // requisito 1 - importar o arquivo para poder trabalhar com ele
import SolarSystem from './components/SolarSystem'; // requisito 2

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

export default App;
