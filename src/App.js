import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import ErrorPage from "./Pages/404";
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

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Homepage />,
			errorElement: <ErrorPage />
		},
		{
			path: "/gallery",
			element: <Gallery />,
			errorElement: <ErrorPage />
		}
	])

	return (
			<MobileViewContext.Provider value={isMobile}>
				<RouterProvider router={router} />
			</MobileViewContext.Provider>
	)
}

export default App;