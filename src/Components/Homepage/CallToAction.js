import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

import './CallToAction.scss';

const CallToAction = () => {
	return (
		<div className="calltoaction-container">
			<span id="calltoaction-title">Fale conosco</span>
			<div className="calltoaction-number">
				<FontAwesomeIcon icon={faHeadset} />
				<span>(71) 99999-9999</span> {/* CMS: Phone Number	 */}	
			</div>
		</div>
	)
}

export default CallToAction;