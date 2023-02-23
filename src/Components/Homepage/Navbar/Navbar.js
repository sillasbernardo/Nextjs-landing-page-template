import React from "react";
import { faHome, faComments, faPeopleGroup, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";

import './Navbar.scss';
import NavbarItem from "./Navbar_Item";
import CallToAction from "../../Utils/CallToAction";

const Navbar = (props) => {
	return (
		<nav>
			<ul id="navbar-list">
				<NavbarItem iconName={faHome} navItemTitle="Home"/>
				<NavbarItem onClick={() => props.onScrollClick("review")} iconName={faComments} navItemTitle="Reviews"/>
				<NavbarItem onClick={() => props.onScrollClick("about")} iconName={faPeopleGroup} navItemTitle="Quem somos"/>
				<NavbarItem onClick={() => props.onScrollClick("services")} iconName={faLightbulb} navItemTitle="Serviços"/>
				<NavbarItem onClick={() => props.onScrollClick("partners")} iconName={faHandshake} navItemTitle="Parceiros"/>
				<CallToAction />
			</ul>
		</nav>
	)
}

export default Navbar;