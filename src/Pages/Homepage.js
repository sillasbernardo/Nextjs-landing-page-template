import React, { useContext, useRef } from "react";

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

	const reviewRef = useRef(null);
	const aboutRef = useRef(null);
	const servicesRef = useRef(null);
	const partnersRef = useRef(null);

	const onPagesHandler = (page) => {
		switch (page){
			case "review":
				reviewRef.current.scrollIntoView({ behavior: 'smooth' });
				break
			case "about":
				aboutRef.current.scrollIntoView({ behavior: 'smooth' });
				break
			case "services":
				servicesRef.current.scrollIntoView({ behavior: 'smooth' });
				break
			case "partners":
				partnersRef.current.scrollIntoView({ behavior: 'smooth' });
				break
			default:
				return console.error('Error while loading page, check the page name and try again.')
		}
	}

	return (
		<div id="homepage-container">
			<Header onScrollClick={onPagesHandler} />
			<Presentation />
			<Awards />
			<Reviews ref={reviewRef} />
			{!isMobile && <About ref={aboutRef} />}
			{!isMobile && <Services ref={servicesRef} />}
			<Partners ref={partnersRef}/>
			{!isMobile && <Contact/>}
			<Footer />
		</div>
	)
}

export default Homepage;