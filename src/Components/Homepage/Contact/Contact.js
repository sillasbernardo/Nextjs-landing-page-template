import React, { useState, useContext } from 'react';

import './Contact.scss';
import logo from '../../../Assets/Img/logo.png';
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
      <span className="socialmedia-info">{props.info}</span>
    </div>
  );
};

const Contact = (props) => {
  const isMobile = useContext(MobileViewContext);

  const [apiData, setApiData] = useState();
  fetchApi('api/contact', setApiData, 'contactData');

  return (
    <>
      {isMobile && <LoadingScreen timeout={1000} styles={{backgroundColor: "#131313"}} spinnerColor="#fff" />}
      <div className="contact-container">
        {isMobile && <CloseButton onClose={props.onClose} />}
        <span className="contact-title">
          Entre em <span className="contact-title-yellow">contato</span>
        </span>
        <div className="contact-left">
          <img className="contact-left-logo" src={logo} alt="img" />
          <div className="contact-info">
            {apiData &&
              apiData.map((socialMedia, index) => {
                return (
                  <SocialMediaItem
                    key={index}
                    image={socialMedia.icon}
                    info={socialMedia.info}
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
