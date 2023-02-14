import React from "react";

import Header from "../Components/Homepage/Header";
import Presentation from "../Components/Homepage/Presentation/Presentation";
import './Homepage.scss';

const Homepage = () => {
	return (
		<div id="homepage-container">
			<Header />
			<Presentation />	
		</div>
	)
}

export default Homepage;