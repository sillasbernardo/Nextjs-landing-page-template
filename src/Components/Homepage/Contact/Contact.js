import React, { useState, useContext } from 'react';

import './Contact.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import CloseButton from '../../Utils/CloseButton';
import { fetchApi } from '../../Utils/fetchApi';
import LoadingScreen from "../../Utils/LoadingScreen";

const SocialMediaItem = (props) => {
  return (
    <div className="socialmedia-item">
      <img
        className="socialmedia-logo"
        width={30}
        src={props.image}
        alt="img"
      />
      <span onClick={() => window.open(props.link)} className="socialmedia-info">{props.info}</span>
    </div>
  );
};

const Contact = (props) => {
  const isMobile = useContext(MobileViewContext);

  const [apiData, setApiData] = useState();
  fetchApi('api/homepage/contact', setApiData, 'contactData');

  const [logoData, setLogoData] = useState();
  fetchApi('api/homepage/logo', setLogoData, 'logoData')

  return (
    <>
      {isMobile && <LoadingScreen timeout={1000} styles={{backgroundColor: "#131313"}} spinnerColor="#fff" />}
      <div className="contact-container">
        {isMobile && <CloseButton onClose={props.onClose} />}
        <span className="contact-title">
          Entre em <span className="contact-title-yellow">contato</span>
        </span>
        <div className="contact-left">
          {logoData ? <img className="contact-left-logo" src={logoData[1].link} alt="img" /> : <div></div>}
          <div className="contact-info">
            {apiData &&
              apiData.map((socialMedia, index) => {
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
    </>
  );
};

export default Contact;
