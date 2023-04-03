import React, { useState } from "react";
import { Link } from 'react-router-dom';

import ViewGalleryCircle from "./ViewGalleryCircle/ViewGalleryCircle";
import './ServiceItem.scss';

const ServiceItem = (props) => {
  // Toggle the view circle in each service
  const [isGalleryView, setIsGalleryView] = useState(false);
  const showGalleryHandler = (action, element) => {
    if (element) {
      action === 'over' ? setIsGalleryView(true) : setIsGalleryView(false);
    }
  };

  return (
    <div className="service-item">
      <div
        onMouseEnter={(element) => showGalleryHandler('over', element)}
        onMouseLeave={(element) => showGalleryHandler('out', element)}
        className="circle-image"
      >
        <ViewGalleryCircle isGalleryView={isGalleryView} title={props.title} />
        <img className="services-image" src={props.image} alt="img" />
      </div>
      <span className="service-title">{props.title}</span>
      {props.isMobile && (
        <Link
          onClick={() => {
            document.body.style.overflow = 'auto';
          }}
          className="gallery-link-button"
          to={`/gallery/${props.title}`}
        >
          <button className="see-gallery-button">Ver galeria</button>
        </Link>
      )}
    </div>
  );
};

export default ServiceItem;