import React, { useEffect, useContext, useState } from "react";
import ReactDOM from "react-dom";

import About from "../About/About";
import Services from "../Services/Services";
import Partners from "../Partners/Partners";
import './NavbarItemHandler.scss';
import { ClosePageContext } from "../../Context/ClosePageContext";
import Contact from "../Contact/Contact";

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
			content = (
				<div className="page-container">
					<Services onClose={() => setOnItemClose(true)}/>
				</div>
			)
			break;
		case "partners":
			content = (
				<div className="page-container">
					<Partners onClose={() => setOnItemClose(true)} />
				</div>
			)
			break;
		case "contact":
			content = (
				<div className="page-container">
					<Contact onClose={() => setOnItemClose(true)} />
				</div>
			)
			break;
		default:
			console.error('Option is invalid.')
	}

	return ReactDOM.createPortal(content, document.getElementById('navbar-item-hook'))
}

export default NavbarItemHandler;