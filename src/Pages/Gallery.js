import React, { useContext } from "react";

import Header from "../Components/Gallery/Header/Header";
import './Gallery.scss';
import { MobileViewContext } from "../Components/Context/MobileViewContext";
import CategorySection from "../Components/Gallery/Category/CategorySection";
import Showcase from "../Components/Gallery/Showcase/Showcase";

const Gallery = () => {
	const isMobile = useContext(MobileViewContext)

	return (
		<div className="gallery-main-component">
			<Header />
			{!isMobile &&<div className="gallery-main-head">
				<div className="line-decoration"></div>
				<span className="gallery-main-title">Galeria de fotos</span>
				<div className="line-decoration"></div>
			</div>}
			{!isMobile && <CategorySection />}
			<Showcase />
		</div>
	)
}

export default Gallery;