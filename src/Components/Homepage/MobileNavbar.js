import React from 'react';
import {
  faHeadset,
  faPeopleGroup,
  faLightbulb,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

import './MobileNavbar.scss';
import NavbarItem from './Navbar_Item';
import Modal from '../Utils/Modal';

const MobileNavbar = (props) => {
  return (
    <Modal
      onOpenNavbar={props.onOpenNavbar}
      onCloseNavbar={props.onCloseNavbar}
    >
			<div className='mobile-navbar'>
				<NavbarItem iconName={faPeopleGroup} navItemTitle="Quem somos" />
				<NavbarItem iconName={faLightbulb} navItemTitle="Serviços" />
				<NavbarItem iconName={faHandshake} navItemTitle="Parceiros" />
				<NavbarItem iconName={faHeadset} navItemTitle="Contato" />				
			</div>
    </Modal>
  );
};

export default MobileNavbar;
