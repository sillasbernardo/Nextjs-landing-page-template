import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import About from "../About/About";
import './NavbarItemHandler.scss';
import { ClosePageContext } from "../../Context/ClosePageContext";

const NavbarItemHandler = (props) => {
	let content;

	const [onItemClose, setOnItemClose] = useContext(ClosePageContext);

	switch (props.page) {
		case "about":
			content = (
				<div className="page-container">
					<About onClose={() => setOnItemClose(true)} />
				</div>
			)
			break;
		case "services":
			break;
		case "partners":
			break;
		case "contact":
			break;
		default:
			console.error('Option is invalid.')
	}

	return ReactDOM.createPortal(content, document.getElementById('navbar-item-hook'))
}

export default NavbarItemHandler;