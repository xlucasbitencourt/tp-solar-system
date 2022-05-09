import React from 'react';
import Header from './components/Header'; // requisito 1 - importar o arquivo para poder trabalhar com ele

class App extends React.Component {
  render() {
    return (<Header />); // requisito 1 - retorna a função feita no arquivo Header, como se fosse uma tag
  }
}

export default App;
