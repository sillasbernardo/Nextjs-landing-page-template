/**
 * Renders a section with section items
 * @param {string} props.title - Define title name
 * @param {*} props.children - Pass a react component as children
 */

import React from "react";

import './SidebarSection.scss';

const SidebarSection = (props) => {

	if (props.title){
		return (
			<div className="sidebar-section">
				<div className="s-s-title">
					<h4>{props.title}</h4>
					<div className="s-s-line"></div>
				</div>
				<div className="s-s-content">
					{props.children}
				</div>
			</div>
		)
	}
}

export default SidebarSection;