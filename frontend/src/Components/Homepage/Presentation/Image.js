import React from "react";

const Image = (props) => {
	return (
		<React.Fragment>
			<img className='presentation-image' src={props.prevImage} alt="img"/>
			<img className='presentation-image' src={props.actualImage} alt="img"/>
		</React.Fragment>
	)
}

export default Image;