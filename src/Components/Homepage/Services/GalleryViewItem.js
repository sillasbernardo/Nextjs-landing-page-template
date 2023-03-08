import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { GalleryCategoryContext } from '../../Context/GalleryCategoryContext';
import './GalleryViewItem.scss';

const GalleryViewItem = (props) => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const showGalleryHandler = (action, element) => {
    if (element) {
      action === 'over' ? setIsGalleryView(true) : setIsGalleryView(false);
    }
  };

  const [galleryCategory, setGalleryCategory] = useContext(
    GalleryCategoryContext
  );

  return (
    <div className="items-list-service">
      <div
        onMouseEnter={(element) => showGalleryHandler('over', element)}
        onMouseLeave={(element) => showGalleryHandler('out', element)}
        className="circle-image"
      >
        <CSSTransition
          in={isGalleryView}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames="gallery-view-transition"
        >
          <>
            {isGalleryView && !props.isMobile && (
              <div className="gallery-circle">
                <Link
                  onClick={() => {
                    setGalleryCategory(props.title);
                    document.body.style.overflow = 'auto';
                  }}
                  className="gallery-link"
                  to={`/gallery`}
                >
                  <span>Ver galeria</span>
                </Link>
              </div>
            )}
          </>
        </CSSTransition>
        <img src={props.image} alt="img" />
      </div>
      <span className="service-title">{props.title}</span>
      {props.isMobile && (
        <Link
          onClick={() => {
            setGalleryCategory(props.title);
            document.body.style.overflow = 'auto';
          }}
          className="gallery-link-button"
          to={`/gallery`}
        >
          <button className="see-gallery-button">Ver galeria</button>
        </Link>
      )}
    </div>
  );
};

export default GalleryViewItem;