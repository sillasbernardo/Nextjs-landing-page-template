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
  fetchApi('api/homepage/calltoaction', setApiData, 'calltoactionData');

  if (apiData) {
    return (
      <div className="calltoaction-container">
				<div className='calltoaction-leftside'>
					<span id="calltoaction-title">Fale conosco</span>
					<div className="calltoaction-number">
						<FontAwesomeIcon icon={faHeadset} />
						<span onClick={() => window.open(apiData.speakToUs.link)}>
							{apiData.speakToUs.phoneNumber}
						</span>
					</div>					
				</div>
				{!isMobile && <div className='calltoaction-blankline'></div>}
        {!isMobile && <img className='calltoaction-insta' src={apiData.instagram.icon} alt="img" onClick={() => window.open(apiData.instagram.link)} />}
      </div>
    );
  }
};

export default CallToAction;
