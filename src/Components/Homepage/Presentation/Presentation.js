import React, { useContext } from 'react';

import CallToAction from '../../Utils/CallToAction';
import ImageSlide from './ImageSlide';
import './Presentation.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';

const Presentation = () => {
  const isMobile = useContext(MobileViewContext);

  return (
    <React.Fragment>
        <div className="presentation-headline-container">
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
        </div>
        <ImageSlide />
    </React.Fragment>
  );
};

export default Presentation;
