import React from "react";

import Header from "../Components/Homepage/Header/Header";
import Presentation from "../Components/Homepage/Presentation/Presentation";
import Awards from "../Components/Homepage/Awards/Awards";
import './Homepage.scss';
import Reviews from "../Components/Homepage/Reviews/Reviews";
import About from "../Components/Homepage/About/About";

const Homepage = () => {
	return (
		<div id="homepage-container">
			<Header />
			<Presentation />
			<Awards />
			<Reviews />
			<About />
		</div>
	)
}

export default Homepage;