import React, { Component } from 'react';

import Grid from './components/Grid';

class App extends Component {
  constructor () {
    super();
    this.state = {
      gridSizeX: 0,
      gridSizeY: 0,
      roverX: 0,
      roverY: 0,
      roverFace: 'W',
      commands: ""
    }
  }

  setGridSize = e => {
    this.setState({
      gridSizeX: parseInt(e.target.value.charAt(0), 10),
      gridSizeY: parseInt(e.target.value.charAt(1), 10)
    })
  }

  setRoverCoords = e => {
    this.setState({
      roverX: parseInt(e.target.value.charAt(0), 10),
      roverY: parseInt(e.target.value.charAt(1), 10)
    })
  }

  setRoverFacingCoords = e => this.setState({roverFace: e.target.value})

  setCommands = e => {
    this.setState({
      commands: e.target.value
    })
  }

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps: ");
	}
	start = e => {
		let commands = this.state.commands
		for (let char of commands) {
			setTimeout(() => {
				switch (char) {
					case 'l':
						this.turnLeft()
						break;
					case 'r':
						console.log("Turning Right");
						break;
					case 'm':
					this.move()
					break;
					default:
						break;
				}
			}, 2000)
		}
	}

	turnLeft = () => {
		switch (this.state.roverFace) {
			case 'N':
				this.setState({
					roverFace:'W'
				})
				break;
			case 'W':
				this.setState({
					roverFace:'S'
				})
				break;
			case 'S':
				this.setState({
					roverFace:'E'
				})
				break;
			case 'E':
				this.setState({
					roverFace:'N'
				})
				break;
			default:
				break;
		}
	}
	move = () => {
		this.setState({
			roverX: this.state.roverX + 1
		})
	}

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Grid Dimensions" onChange={e => this.setGridSize(e)}/>
        <input type="text" placeholder="Rover Coords" onChange={e => this.setRoverCoords(e)}/>
        <input type="text" placeholder="Rover Facing Direction" onChange={e => this.setRoverFacingCoords(e)}/>
        <input type="text" placeholder="Commands" onChange={e => this.setCommands(e)}/>
        <Grid
					sizeX={this.state.gridSizeX}
					sizeY={this.state.gridSizeY}
					roverX={this.state.roverX}
					roverY={this.state.roverY}
					roverFace={this.state.roverFace}
					commands={this.state.commands}
				/>
				{
					this.state.roverX &&
					this.state.roverY &&
					this.state.commands &&
					this.state.gridSizeX &&
					this.state.gridSizeY ?
					<input type="submit" value="start" onClick={(e) => this.start(e)} />:
					<div>Fill In All Fields</div>
				}
      </div>
    );
  }
}

export default App;
