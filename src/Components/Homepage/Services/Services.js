import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Services.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import CloseButton from '../../Utils/CloseButton';
import { fetchApi } from '../../Utils/fetchApi';
import LoadingScreen from '../../Utils/LoadingScreen';
import { Link } from 'react-router-dom';
import { GalleryCategoryContext } from '../../Context/GalleryCategoryContext';

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

const Services = React.forwardRef((props, ref) => {
  const isMobile = useContext(MobileViewContext);

  const [apiData, setApiData] = useState();

  fetchApi('api/services', setApiData, 'servicesData');

  if (isMobile && !apiData) {
    return <LoadingScreen className="services-bg-color" spinnerColor="#fff" />;
  }

  return (
    <>
      {apiData && (
        <div ref={ref} className="services-container">
          <div className="services-title-container">
            <span id="services-title">
              Nossos <span id="services-title-yellow">serviços</span>
            </span>
            {isMobile && <CloseButton onClose={props.onClose} />}
          </div>
          <div className="services-items-list">
            {apiData.map((service, index) => {
              return (
                <GalleryViewItem
                  key={index}
                  image={service.link}
                  title={service.name}
                  isMobile={isMobile}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
});

export default Services;
