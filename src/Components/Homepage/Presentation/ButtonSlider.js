import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonSlider = (props) => {
	return (
		<button onClick={props.moveSlide} className={props.direction === "next" ? "btn-slide next" : "btn-slide prev"}>
			<FontAwesomeIcon className="img" icon={props.direction === "next" ? faChevronRight : faChevronLeft} />
		</button>
	)
}

export default ButtonSlider;