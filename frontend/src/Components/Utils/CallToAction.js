import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import './CallToAction.scss';
import { MobileViewContext } from '../Context/MobileViewContext';
import instagramIcon from '../../Assets/Img/Homepage/Contact/instagram.png';
import facebookIcon from '../../Assets/Img/Homepage/Contact/facebook.png';

const CallToAction = () => {
  const isMobile = useContext(MobileViewContext);

  return (
    <div className="calltoaction-container">
      <div className="calltoaction-leftside">
        <span id="calltoaction-title">Speak to us</span>
        <div className="calltoaction-number">
          <FontAwesomeIcon icon={faHeadset} />
          <span onClick={() => window.open('https://www.google.com')}>
            (876) 876-8765
          </span>
        </div>
      </div>
      {!isMobile && <div className="calltoaction-blankline"></div>}
      {!isMobile && <div className="cta-socialmedia-icons">
        <img
          className="calltoaction-socialmedia"
          src={instagramIcon}
          alt="img"
          onClick={() => window.open('https://www.instagram.com')}
        />
        <img
          className="calltoaction-socialmedia"
          src={facebookIcon}
          alt="img"
          onClick={() => window.open('https://www.facebook.com')}
        />
      </div>}
    </div>
  );
};

export default CallToAction;
