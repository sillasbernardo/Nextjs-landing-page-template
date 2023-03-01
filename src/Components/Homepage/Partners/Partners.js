import React, { useState, useContext } from 'react';

import './Partners.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import { fetchApi } from '../../Utils/fetchApi';

const PartnerItem = (props) => {
  return (
    <div className="partner-item">
      <img src={props.image} alt="img" />
      <button
        className="partner-contact-button"
      >
        <a href={props.contact}>Entre em contato</a>
      </button>
    </div>
  );
};

const Partners = React.forwardRef((props, ref) => {

  const [apiData, setApiData] = useState();

  fetchApi("api/partners", setApiData, "partnersData")

  return (
    <div ref={ref} className='partners-container'>
      <span className="partners-title">
        Nós trabalhamos com os melhores
        <span className="partners-title-highlight">parceiros</span>
      </span>
			{apiData && <div className='partners-bottom'>
				<div className="partners-list">
					{apiData.map((partner, index) => {
						return (
							<PartnerItem
								key={index}
								image={partner.imageLink}
								contact={partner.partnerLink}
							/>
						);
					})}
				</div>				
			</div>}
    </div>
  );
});

export default Partners;
