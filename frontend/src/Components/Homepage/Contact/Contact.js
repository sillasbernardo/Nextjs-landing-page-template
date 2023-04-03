import React from 'react';

import './Contact.scss';
import SocialMediaItem from './SocialMediaItem';
import Contacts from '../../../Assets/Img/Homepage/Contact/index';
import logo from '../../../Assets/Img/Homepage/Contact/logo.png';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <span className="contact-title">
        Contact <span className="contact-title-yellow">us</span>
      </span>
      <div className="contact-left">
        <img className="contact-left-logo" src={logo} alt="img" />
        <div className="contact-info">
          {Contacts.map((socialMedia, index) => {
            return (
              <SocialMediaItem
                key={index}
                image={socialMedia.contactIcon}
                info={socialMedia.contactInfo.info}
                link={socialMedia.contactInfo.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
