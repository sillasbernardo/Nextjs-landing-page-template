import React, { useContext, useState } from 'react';

import CallToAction from '../../Utils/CallToAction';
import ImageSlide from './ImageSlide';
import './Presentation.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';

const Presentation = () => {
  /* Handles how the component render based on the device type */
  const isMobile = useContext(MobileViewContext);

  /* 
    * Is set to true when images are fetched from ImageSlide 
    *
    * This state prevents this component from being rendered while images are still showing
  */
  const [isImages, setIsImages] = useState(false);

  return (
    <React.Fragment>
        {isImages && <div className="presentation-headline-container">
          <div className="presentation-headline">
            <h1>
              Venha iluminar a sua <span>história</span>!
            </h1>
            <h5>
              Torne seus <span>eventos</span> ainda mais <span>especiais</span>{' '}
              com nosso <span>brilho</span> exclusivo.
            </h5>
          </div>
          {isMobile && <CallToAction />}
        </div>}
        <ImageSlide setIsImages={setIsImages} />
    </React.Fragment>
  );
};

export default Presentation;
