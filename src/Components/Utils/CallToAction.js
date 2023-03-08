import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import './CallToAction.scss';
import { fetchApi } from './fetchApi';
import { MobileViewContext } from "../Context/MobileViewContext";

const CallToAction = () => {
	const isMobile = useContext(MobileViewContext);

  /* Store data from API */
  const [apiData, setApiData] = useState();
  fetchApi('api/calltoaction', setApiData, 'calltoactionData');

  const [socialMediaData, setSocialMediaData] = useState();
  fetchApi('api/contact', setSocialMediaData, 'contactData');

  let instagramImage;

  if (socialMediaData) {
    socialMediaData.map((socialMedia) => {
      if (socialMedia.info === '@gbiluminacoes') {
        instagramImage = socialMedia.icon;
      }
    });
  }

  if (apiData) {
    return (
      <div className="calltoaction-container">
				<div className='calltoaction-leftside'>
					<span id="calltoaction-title">Fale conosco</span>
					<div className="calltoaction-number">
						<FontAwesomeIcon icon={faHeadset} />
						<span onClick={() => window.open(apiData.toLink)}>
							{apiData.phoneNumber}
						</span>
					</div>					
				</div>
				{!isMobile && <div className='calltoaction-blankline'></div>}
        {!isMobile && <img className='calltoaction-insta' src={instagramImage} alt="img" onClick={() => window.open("https://www.instagram.com/gbiluminacoes/")} />}
      </div>
    );
  }
};

export default CallToAction;
