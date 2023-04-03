import React from "react";
import { CSSTransition } from "react-transition-group";

import "./ImageZoom.scss";

const ImageZoom = (props) => {
  return (
    <>
      <div className="image-zoom">
        <img src={props.imageLink} />
        <button onClick={() => props.onClose({ isZoom: false, imageLink: "" })}>Close</button>
      </div>
      <div
        onClick={() => props.onClose({ isZoom: false, imageLink: "" })}
        className="image-zoom-backdrop"
      ></div>
    </>
  );
};

export default ImageZoom;
