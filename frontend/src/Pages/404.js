import React from "react";
import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import "./404.scss";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="error-page">
			<FontAwesomeIcon className="error-icon" icon={faTriangleExclamation} />
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has ocurred.</p>
			<p className="error-box" >
				<p>Error message</p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage;