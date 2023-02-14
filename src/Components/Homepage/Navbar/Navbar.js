import React from "react";
import { faHome, faComments, faPeopleGroup, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";

import './Navbar.scss';
import NavbarItem from "./Navbar_Item";
import CallToAction from "../CallToAction";

const Navbar = () => {
	return (
		<nav>
			<ul id="navbar-list">
				<NavbarItem iconName={faHome} navItemTitle="Home"/>
				<NavbarItem iconName={faComments} navItemTitle="Reviews"/>
				<NavbarItem iconName={faPeopleGroup} navItemTitle="Quem somos"/>
				<NavbarItem iconName={faLightbulb} navItemTitle="Serviços"/>
				<NavbarItem iconName={faHandshake} navItemTitle="Parceiros"/>
				<CallToAction />
			</ul>
		</nav>
	)
}

export default Navbar;