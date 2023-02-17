import React, { useContext } from "react";

import Header from "../Components/Homepage/Header/Header";
import Presentation from "../Components/Homepage/Presentation/Presentation";
import Awards from "../Components/Homepage/Awards/Awards";
import './Homepage.scss';
import Reviews from "../Components/Homepage/Reviews/Reviews";
import About from "../Components/Homepage/About/About";
import Footer from "../Components/Homepage/Footer/Footer";
import { MobileViewContext } from "../Components/Context/MobileViewContext";

const Homepage = () => {
	const isMobile = useContext(MobileViewContext);

	console.log(isMobile)

	return (
		<div id="homepage-container">
			<Header />
			<Presentation />
			<Awards />
			<Reviews />
			{!isMobile && <About />}
			<Footer />
		</div>
	)
}

export default Homepage;