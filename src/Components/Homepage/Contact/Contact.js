import React, { useContext } from 'react';

import './Contact.scss';
import logo from '../../../Assets/Img/logo.png';
import { socialMediaLinks } from './ContactHandler';
import { MobileViewContext } from "../../Context/MobileViewContext";
import CloseButton from '../../Utils/CloseButton';

const SocialMediaItem = (props) => {
  return <div className='socialmedia-item'>
		<img className='socialmedia-logo' width={30} src={props.image} alt="img"/>
		<span className='socialmedia-info'>{props.info}</span>
	</div>;
};

const Contact = (props) => {
  const isMobile = useContext(MobileViewContext)

  return (
    <div className="contact-container">
      {isMobile && <CloseButton onClose={props.onClose} /> }
      <div className="contact-left">
        <span className="contact-title">
          Entre em <span className="contact-title-yellow">contato</span>
        </span>
        <img className='contact-left-logo' src={logo} alt="img" />
        <div className="contact-info">
          {socialMediaLinks.map((socialMedia) => {
            return <SocialMediaItem key={socialMedia.id} image={Object.values(socialMedia)[1].logo} info={Object.values(socialMedia)[1].info}/>;
          })}
        </div>
      </div>
      <div className="contact-right">
				<input type="text" name="name" placeholder='Nome'/>
				<input type="text" name="phone" placeholder='Telefone'/>
				<input type="text" name="mail" placeholder='E-mail'/>
				<textarea rows={5} type="text" name="message" placeholder='Mensagem'/>
				<button className='contact-btn' type="">Enviar mensagem</button>
			</div>
    </div>
  );
};

export default Contact;
