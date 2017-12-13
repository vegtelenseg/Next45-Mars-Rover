import React from 'react';

const roverFaceStyle = {
	top: "50%",
	left: "50%",
	position: "absolute",
	transform: "translate(-50%, -50%)"
}

const hasRover = (roverX, roverY, roverFace, cellX, cellY) =>
	(roverX === cellX && roverY === cellY)

const Cell = ({roverX, roverY, roverFace, cellX, cellY}) => {

		const styles = {
			backgroundColor :
				hasRover(roverX, roverY, roverFace, cellX, cellY) ? "red" : "white",
			border: "1px solid black",
			position: "relative",
			display: "inline-block",
			width: "50px",
			height: "50px",
		}

		if (hasRover(roverX, roverY, roverFace, cellX, cellY)) {
			return (
	    	<div style={styles}>
					{
						<span style={roverFaceStyle}>{roverFace.toUpperCase()}</span>
					}
				</div>
	  	)
		}
		else {
			return <div style={styles}></div>
		}
}

export default Cell;
