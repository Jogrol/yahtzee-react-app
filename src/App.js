import React, { Component } from 'react';
import DiceContainer from './components/DiceContainer.js';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (<div>
      <NavBar />
      <DiceContainer />

    </div>)

  }
}

export default App;
