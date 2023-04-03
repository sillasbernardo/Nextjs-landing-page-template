import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import { MobileViewContext } from "../../../../../Context/MobileViewContext";

const ViewGalleryCircle = (props) => {
  const isMobile = useContext(MobileViewContext);

  return (
    <CSSTransition
      in={props.isGalleryView}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames="gallery-view-transition"
    >
      <>
        {props.isGalleryView && !isMobile && (
          <div className="gallery-circle">
            <Link
              onClick={() => {
                document.body.style.overflow = "auto";
              }}
              className="gallery-link"
              to={`/gallery/${props.title}`}
            >
              <span>Ver galeria</span>
            </Link>
          </div>
        )}
      </>
    </CSSTransition>
  );
};

export default ViewGalleryCircle;
