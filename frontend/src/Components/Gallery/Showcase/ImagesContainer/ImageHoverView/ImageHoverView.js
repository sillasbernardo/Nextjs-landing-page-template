import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./ImageHoverView.scss";

const ImageHoverView = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="image-hover-view"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={props.onClick}
    >
      <CSSTransition in={isHover} timeout={500} classNames="i-h-v-transition" mountOnEnter unmountOnExit>
        <>
          {isHover && (
            <div className="i-h-v-content">
              <span className="i-h-v-view-image">Ver imagem</span>
            </div>
          )}
        </>
      </CSSTransition>
      {props.children}
    </div>
  );
};

export default ImageHoverView;
