import React from 'react';

import './Contact.scss';
import logo from '../../../Assets/Img/logo.png';
import { socialMediaLinks } from './ContactHandler';

const SocialMediaItem = (props) => {
  return <div>
		<img width={30} src={props.image} alt="img"/>
		<span>{props.info}</span>
	</div>;
};

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <span className="contact-title">
          Entre em <span className="contact-title-yellow">contato</span>
        </span>
        <img src={logo} alt="img" />
        <div className="contact-info">
          {socialMediaLinks.map((socialMedia) => {
            return <SocialMediaItem key={socialMedia.id} image={Object.values(socialMedia)[1].logo} info={Object.values(socialMedia)[1].info}/>;
          })}
        </div>
      </div>
      <div className="contact-right">
				<input type="text" name="name" placeholder='Nome'/>
				<input type="text" name="phone" placeholder='Telefone'/>
				<input type="text" name="message" placeholder='Mensagem'/>
				<button type="">Enviar mensagem</button>
			</div>
    </div>
  );
};

export default Contact;
