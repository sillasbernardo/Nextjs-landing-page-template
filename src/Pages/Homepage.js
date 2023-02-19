import React, { useContext } from "react";

import Header from "../Components/Homepage/Header/Header";
import Presentation from "../Components/Homepage/Presentation/Presentation";
import Awards from "../Components/Homepage/Awards/Awards";
import './Homepage.scss';
import Reviews from "../Components/Homepage/Reviews/Reviews";
import About from "../Components/Homepage/About/About";
import Services from "../Components/Homepage/Services/Services";
import Footer from "../Components/Homepage/Footer/Footer";
import { MobileViewContext } from "../Components/Context/MobileViewContext";
import Partners from "../Components/Homepage/Partners/Partners";
import Contact from "../Components/Homepage/Contact/Contact";

const Homepage = () => {
	const isMobile = useContext(MobileViewContext);

	return (
		<div id="homepage-container">
			<Header />
			<Presentation />
			<Awards />
			<Reviews />
			{!isMobile && <About />}
			{!isMobile && <Services />}
			{!isMobile && <Partners />}
			{!isMobile && <Contact />}
			<Footer />
		</div>
	)
}

export default Homepage;