import React from 'react';
import Cell from './Cell';

const styles = {
  backgroundColor: "grey",
  textAlign: "center",
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%) "
}

export default class Grid extends React.Component {

		constructor(props) {
			super(props)
			this.state = {
				roverX: 0,
				roverY:0,
				roverFace: props.roverFace,
				commands: props.commands
			}
		}
    clickHandler({ col, row, cellName, cellValue }) {
        // ...
    }



    render() {
			console.log("Rover face: ", this.props.roverFace);
        let x = 1,
            y = 1,
            thresholdX = this.props.sizeY,
            thresholdY = this.props.sizeX;
        let cells = [];
        while (x <= thresholdX) {
          y = 1;
          while(y <= thresholdY) {
            cells.push(
              <Cell
								key={x + "" + y}
								id={x + "" + y}
								roverX={this.props.roverX}
								roverY={this.props.roverY}
								roverFace={this.props.roverFace}
								commands={this.props.commands}
								cellX={x}
								cellY={y}

							/>
            )
            ++y > thresholdY && cells.push(<br key={Math.random()}/>)
          }
          x++;
        }
        return <div style={styles}>{cells}</div>
    }
}
