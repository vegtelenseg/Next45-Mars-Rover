import React, { Component } from 'react';

import Grid from './components/Grid';

const ProgramInput = () => {
  return (
    <div>
      <input type="text" placeholder="Grid Dimensions"/>
      <input type="text" placeholder="Rover Coords"/>
      <input type="text" placeholder="Rover Facing Direction"/>
      <input type="text" placeholder="Commands"/>
    </div>
  );
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      gridSizeX: 4,
      gridSizeY: 8
    }
  }
  render() {
    return (
      <div className="App">
        <ProgramInput />
        <Grid sizeX={this.state.gridSizeX} sizeY={this.state.gridSizeY}/>
      </div>
    );
  }
}

export default App;
