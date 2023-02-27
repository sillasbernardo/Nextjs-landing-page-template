import React from 'react';
import { Puff } from "react-loader-spinner";

import './LoadingScreen.scss';

const LoadingScreen = (props) => {
	return (
		<div className={`loading-screen-container ${props.className}`}>
			<Puff height="80" width="80" color={props.spinnerColor} />
		</div>
	)
}

export default LoadingScreen;