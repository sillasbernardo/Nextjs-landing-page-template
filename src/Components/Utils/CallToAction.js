import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

import './CallToAction.scss';

const CallToAction = () => {

	/* Store data from API */
	const [apiData, setApiData] = useState();

	useEffect(() => {
		const loadData = async () => {
			const api = await axios.get("http://localhost:5000/api/calltoaction" || "/api/calltoaction", {
				headers: {
					Authorization: process.env.REACT_APP_API_KEY
				}
			})
			setApiData(api.data.calltoactionData);
		}
		loadData();
	}, [])

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