import React from 'react';
import Cell from './Cell';

const styles = {
  backgroundColor: "yellow",
  textAlign: "center",
  top: "50%",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

export default class Grid extends React.Component {

    clickHandler({ col, row, cellName, cellValue }) {
        // ...
    }

    render() {
        let x = 0,
            y = 0,
            thresholdX = this.props.sizeX,
            thresholdY = this.props.sizeY;
        let cells = [];
        while (x < thresholdX) {
          y = 0;
          while(y < thresholdY) {
            cells.push(
              <Cell key={x + "" + y} id={x + "" + y}/>
            )
            y++;
            {
              y < thresholdY && cells.push(<br/>)
            }
          }
          x++;
        }
        return <div style={styles}>{cells}</div>
    }
}
