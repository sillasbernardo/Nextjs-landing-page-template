import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Services.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import weddingImage from '../../../Assets/Img/ServicesImages/servicesimage.jpg';
import CloseButton from '../../Utils/CloseButton';

const GalleryViewItem = (props) => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const showGalleryHandler = (action, element) => {
    if (element) {
      action === 'over' ? setIsGalleryView(true) : setIsGalleryView(false);
    }
  };

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
								<span onClick={() => console.log('Gallery loading...')}>
									Ver galeria
								</span>
							</div>
						)}
					</>
        </CSSTransition>
        <img src={props.image} alt="img" />
      </div>
      <span className="service-title">{props.title}</span>
      {props.isMobile && <button className='see-gallery-button'>Ver galeria</button>}
    </div>
  );
};

const Services = React.forwardRef((props, ref) => {
  const isMobile = useContext(MobileViewContext);

  const dummy_services = [
    { id: 1, image: weddingImage, title: 'Casamentos', galleryLink: '' },
    { id: 2, image: weddingImage, title: 'Aniversários', galleryLink: '' },
    { id: 3, image: weddingImage, title: 'Eventos e Festas', galleryLink: '' },
    {
      id: 4,
      image: weddingImage,
      title: 'Filmagens de drones',
      galleryLink: '',
    },
  ];

  return (
    <div ref={ref} className="services-container">
      <div className="services-title-container">
        <span id="services-title">
          Nossos <span id="services-title-yellow">serviços</span>
        </span>
        {isMobile && (
          <CloseButton onClose={props.onClose} />
        )}
      </div>
      <div className="services-items-list">
        {dummy_services.map((service) => {
          return (
            <GalleryViewItem
              key={service.id}
              image={service.image}
              title={service.title}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Services;
