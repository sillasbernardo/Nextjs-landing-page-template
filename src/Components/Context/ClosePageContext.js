/* 
	* This context is changed to true whenever
	* a close button is clicked on a page.
	* This only works on mobile.
*/

import { createContext } from "react";

export const ClosePageContext = createContext(false);