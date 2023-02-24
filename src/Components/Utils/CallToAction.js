import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "./fetchApi";

import './CallToAction.scss';

const CallToAction = () => {

	/* Store data from API */
	const [apiData, setApiData] = useState();
	fetchApi("api/calltoaction", setApiData, "calltoactionData");

	if (apiData){
		return (
			<div onClick={() => window.open(apiData.toLink)} className="calltoaction-container">
				<span id="calltoaction-title">Fale conosco</span>
				<div className="calltoaction-number">
					<FontAwesomeIcon icon={faHeadset} />
					<span>{apiData.phoneNumber}</span> {/* CMS: Phone Number	 */}	
				</div>
			</div>
		)
	}
}

export default CallToAction;