import React from "react";

import Header from "../Components/Homepage/Header";
import Presentation from "../Components/Homepage/Presentation/Presentation";
import Awards from "../Components/Homepage/Presentation/Awards/Awards";
import './Homepage.scss';

const Homepage = () => {
	return (
		<div id="homepage-container">
			<Header />
			<Presentation />
			<Awards />
		</div>
	)
}

export default Homepage;