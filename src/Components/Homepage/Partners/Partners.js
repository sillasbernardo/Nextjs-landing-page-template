import React, { useState } from 'react';

import './Partners.scss';
import { fetchApi } from '../../Utils/fetchApi';

const PartnerItem = (props) => {
  return (
    <div className="partner-item">
      <div className='partner-item-holder'>
        <img src={props.image} alt="img" />
      </div>
      <span className='partner-item-title'>{props.contact.name}</span>
      <button onClick={() => window.open(props.contact.contactLink)} className="partner-contact-button">
        <a>Entre em contato</a>
      </button>
    </div>
  );
};

const Partners = React.forwardRef((props, ref) => {
  const [apiData, setApiData] = useState();

  fetchApi('api/homepage/partners', setApiData, 'partnersData');

  return (
    <>
      {apiData && (
        <div ref={ref} className="partners-container">
          <span className="partners-title">
            Nossos <span className="partners-title-highlight">parceiros</span>
          </span>
          {apiData && (
            <div className="partners-bottom">
              <div className="partners-list">
                {apiData.map((partner, index) => {
                  return (
                    <PartnerItem
                      key={index}
                      image={partner.partnerLogo}
                      contact={partner.partnerContactLink}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
});

export default Partners;
