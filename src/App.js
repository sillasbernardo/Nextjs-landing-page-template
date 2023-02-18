import React, { useState, useEffect } from "react";

import Homepage from "./Pages/Homepage";
import { MobileViewContext } from "./Components/Context/MobileViewContext";
import { useWindowSize } from "./Components/Utils/useWindowSize";

const App = () => {
	/* 
		* Set mobile view on or off based on useWindowSize value;
	*/
	const [ isMobile, setIsMobile ] = useState(false);
	const width =  useWindowSize();

	useEffect(() => {
		if (width < 800){
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [width])

	return (
		<MobileViewContext.Provider value={isMobile}>
			<Homepage />
		</MobileViewContext.Provider>
	)
}

export default App;