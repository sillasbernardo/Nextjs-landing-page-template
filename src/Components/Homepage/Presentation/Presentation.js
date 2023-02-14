import React from "react";

import CallToAction from "../CallToAction";
import ImageSlide from "./ImageSlide";
import './Presentation.scss';

const Presentation = () => {
	return (
		<React.Fragment>
			<ImageSlide />
			<h1>Venha iluminar a sua <span>história</span>!</h1>
			<h5>Torne seus <span>eventos</span> ainda mais <span>especiais</span> com nosso <span>brilho</span> exclusivo.</h5>
			<CallToAction />
		</React.Fragment>
	)
}

export default Presentation;