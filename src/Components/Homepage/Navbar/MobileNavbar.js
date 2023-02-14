import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  faHeadset,
  faPeopleGroup,
  faLightbulb,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

import './MobileNavbar.scss';
import NavbarItem from './Navbar_Item';
import Modal from '../../Utils/Modal';

const MobileNavbar = (props) => {
  /*
   * Activates CSSTransition based on props.onOpenNavbar
   *
   * CSSTransition won't work if props.onOpenNavbar is
   * set directly to "in={}". "in={}" must receive a state
   * value. (This is just a reminder)
   */
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (props.onOpenNavbar) {
      setIsShow(true);
    }
  }, [props.onOpenNavbar]);

  return (
    <CSSTransition
      in={isShow}
      mountOnEnter
      unmountOnExit
      timeout={500}
      classNames="modal-transition"
    >
      <Modal
        onOpenNavbar={props.onOpenNavbar}
        onCloseNavbar={props.onCloseNavbar}
      >
        <div className="mobile-navbar">
          <NavbarItem iconName={faPeopleGroup} navItemTitle="Quem somos" />
          <NavbarItem iconName={faLightbulb} navItemTitle="Serviços" />
          <NavbarItem iconName={faHandshake} navItemTitle="Parceiros" />
          <NavbarItem iconName={faHeadset} navItemTitle="Contato" />
        </div>
      </Modal>
    </CSSTransition>
  );
};

export default MobileNavbar;
