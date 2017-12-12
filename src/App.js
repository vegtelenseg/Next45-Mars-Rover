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
      roverFace: '',
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
      roverX: parseInt(e.target.value.charAt(1), 10),
      roverY: parseInt(e.target.value.charAt(0), 10)
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
	start = (e) => {
		let commands = this.state.commands
    let i = -1;
		for (let char of commands) {
	     switch (char) {
         case 'l':
          this.turn()
          break;
         case 'r':
          this.turn('right')
          break;
				 case 'm':
		      this.move(this.state.roverFace)
					break;
				default:
					break;
			}
		}
	}

	turn = (left = 'left') => {
		switch (this.state.roverFace) {
			case 'N':
				this.setState({
					roverFace: left === 'left' ? 'W' : 'E'
				})
				break;
			case 'W':
				this.setState({
					roverFace:left === 'left' ? 'S' : 'N'
				})
				break;
			case 'S':
				this.setState({
					roverFace: left === 'left' ? 'E' : 'W'
				})
				break;
			case 'E':
				this.setState({
					roverFace: left === 'left' ? 'N' : 'S'
				})
				break;
			default:
				break;
		}
	}
	move = (roverFace = 'N') => {
    let roverX = this.state.roverX
    let roverY = this.state.roverY
    let overFlowX = roverX + 1 > this.state.gridSizeX || roverX < 1
    let overFlowY = roverY + 1 >  this.state.gridSizeY || roverY < 1
    switch (roverFace) {
      case 'N':
        this.setState({
          roverX: overFlowX ? 1 : roverX - 1,
        })
        break;
      case 'W' :
        this.setState({
          roverY: overFlowY ? 1 : roverY - 1,
        })
        break;
      case 'S':
        this.setState({
          roverX: overFlowX ? 1 : roverX + 1
        })
        break;
      case 'E':
        this.setState({
          roverY: overFlowY ? 1 : roverY + 1
        })
        break;
      default:
        break;
    }
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
					<input type="submit" value="start" onClick={
              (e) => this.start(e)
            }
          />:
					<div>Fill In All Fields</div>
				}
      </div>
    );
  }
}

export default App;
