import React, { useContext } from "react";

import Header from "../Components/Gallery/Header/Header";
import './Gallery.scss';
import { MobileViewContext } from "../Components/Context/MobileViewContext";
import CategorySection from "../Components/Gallery/Category/CategorySection";
import Showcase from "../Components/Gallery/Showcase/Showcase";
import Footer from "../Components/Homepage/Footer/Footer";

const Gallery = () => {
	const isMobile = useContext(MobileViewContext);

	return (
		<div className="gallery-main-component">
			<Header />
			{!isMobile && <CategorySection />}
			<Showcase />
			<Footer className={"gallery-footer"} />
		</div>
	)
}

export default Gallery;