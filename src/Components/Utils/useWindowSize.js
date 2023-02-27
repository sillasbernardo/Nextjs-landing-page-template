/* 
	* This hook listens to the window inner width and returns it as number.
*/

import { useState, useEffect } from "react";

export const useWindowSize = () => {
	const [ width, setWidth ] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	})

	return width;
}

export const useScrollY = () => {
	const [scrollY, setScrollY] = useState(window.screenY);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.screenY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	})

	return scrollY;
}