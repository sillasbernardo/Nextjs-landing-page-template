/* 
	* Creates a context to switch the pages between mobile view and desktop view.
	*
	* Default value is "false", triggering desktop view first
*/

import { createContext } from "react";

export const  MobileViewContext = createContext(false);