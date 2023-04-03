/* 
	* A backdrop to use behind modals to make background darker.
*/

import React from "react";
import ReactDOM from "react-dom"

import "./Backdrop.scss";

const Backdrop = (props) => {
	const content = <div className="backdrop" onClick={() => props.onCloseNavbar(false)}></div>

	return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'))
}

export default Backdrop;