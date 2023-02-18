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