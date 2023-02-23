import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import './CloseButton.scss';

const CloseButton = (props) => {
	return (
		<FontAwesomeIcon
          className={props.className || "x-close"}
          icon={faCircleXmark}
          onClick={props.onClose}
        />
	)
}

export default CloseButton;