import React from 'react';

import './Partners.scss';
import PartnersImages from '../../../Assets/Img/Homepage/Partners/index';

const PartnerItem = (props) => {
  return (
    <div className="partner-item">
      <div className="partner-item-holder">
        <img src={props.image} alt="img" />
      </div>
      <span className="partner-item-title">{props.contact.name}</span>
      <button
        onClick={() => window.open(props.contact.contactLink)}
        className="partner-contact-button"
      >
        <a>Contact</a>
      </button>
    </div>
  );
};

const Partners = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="partners-container">
      <span className="partners-title">
        Our <span className="partners-title-highlight">partners</span>
      </span>
      <div className="partners-bottom">
        <div className="partners-list">
          {PartnersImages.map((partner, index) => {
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
    </div>
  );
});

export default Partners;
