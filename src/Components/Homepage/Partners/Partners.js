import React, { useContext } from 'react';

import './Partners.scss';
import partnerImage from '../../../Assets/Img/PartnersImage/partnerimage.png';
import CloseButton from '../../Utils/CloseButton';
import { MobileViewContext } from '../../Context/MobileViewContext';

const PartnerItem = (props) => {
  return (
    <div className="partner-item">
      <img src={props.image} alt="img" />
      <button
        onClick={() => console.log('Here goes the contact')}
        className="partner-contact-button"
      >
        Entre em contato
      </button>
    </div>
  );
};

const Partners = (props) => {
  const dummy_partners = [
    { id: 1, image: partnerImage, contact: '' },
    { id: 2, image: partnerImage, contact: '' },
    { id: 3, image: partnerImage, contact: '' },
    { id: 4, image: partnerImage, contact: '' },
    { id: 5, image: partnerImage, contact: '' },
    { id: 6, image: partnerImage, contact: '' },
  ];

  const isMobile = useContext(MobileViewContext)

  return (
    <div className='partners-container'>
      <span className="partners-title">
        Nós trabalhamos com os melhores
        <span className="partners-title-highlight">parceiros</span>
      </span>
      {isMobile && <CloseButton onClose={props.onClose} />}
			<div className='partners-bottom'>
				<div className="partners-list">
					{dummy_partners.map((partner) => {
						return (
							<PartnerItem
								key={partner.id}
								image={partner.image}
								contact={partner.contact}
							/>
						);
					})}
				</div>				
			</div>
    </div>
  );
};

export default Partners;
