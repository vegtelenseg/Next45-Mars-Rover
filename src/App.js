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
      gridSizeX: 8,
      gridSizeY: 8,
      roverX: 1,
      roverY: 5,
      roverFace: 'N',
      commands: ""
    }
  }

  setGridSize = e => {
    this.setState({
      gridSizeX: parseInt(e.target.value.charAt(0)),
      gridSizeY: parseInt(e.target.value.charAt(1))
    })
  }

  setRoverCoords = e => {
    this.setState({
      roverX: parseInt(e.target.value.charAt(0)),
      roverY: parseInt(e.target.value.charAt(1))
    })
  }

  setRoverFacingCoords = e => this.setState({roverFace: e.target.value})

  setCommands = e => {
    this.setState({
      commands: e.target.value
    })
  }
  render() {
  console.log(this.state)
    return (
      <div className="App">
        <input type="text" placeholder="Grid Dimensions" onChange={e => this.setGridSize(e)}/>
        <input type="text" placeholder="Rover Coords" onChange={e => this.setRoverCoords(e)}/>
        <input type="text" placeholder="Rover Facing Direction" onChange={e => this.setRoverFacingCoords(e)}/>
        <input type="text" placeholder="Commands" onChange={e => this.setCommands(e)}/>
        <Grid sizeX={this.state.gridSizeX} sizeY={this.state.gridSizeY}/>
      </div>
    );
  }
}

export default App;
