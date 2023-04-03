import React, { useState, useEffect, useReducer, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  faHeadset,
  faPeopleGroup,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import './MobileNavbar.scss';
import NavbarItem from './Navbar_Item';
import Modal from '../../Utils/Modal';
import NavbarItemHandler from './NavbarItemHandler';
import { MobileViewContext } from '../../Context/MobileViewContext';
import { ClosePageContext } from '../../Context/ClosePageContext';

const navbarReducer = (state, action) => {
  switch (action.type){
    case "load_page":
      return {
        isItemClicked: true,
        pageName: action.page
      }
    case "close_page":
      return {
        isItemClicked: false,
        pageName: ""
      }
    default:
      console.error("action.type was not found.")
  }
}

const navbarInitializer = {
  isItemClicked: false,
  pageName: ""
}

const MobileNavbar = (props) => {
  /* Handles how this component will render based on the device type */
  const isMobile = useContext(MobileViewContext);

  /*
   * This useState trigger CSSTransition to animate the mobileNavbar
   */
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  /*
    * A reducer used to handle how the mobilenavbar behaves when rendered.
   */
  const [ navbarState, navbarDispatch ] = useReducer(navbarReducer, navbarInitializer);

  const navbarItemHandler = (type, page) => navbarDispatch({ type, page });

  const [onBtnClose, setOnCloseBtn] = useContext(ClosePageContext);

    /*  
      * #1
      * If props.onOpenNavbar is true, isNavbarOpen is true, mobile navbar renders on screen
      * 
      * #2
      * This resets the navbarState and onCloseContext
      * allowing to open the page again without reloading the page.
      * 
      * The "#2 else" set body overflow to "hidden" when mobile navbar renders,
      * It will only be set to "auto" when mobile navbar is removed from the DOM.
      * You can check for it in mobileNavbarHandler in Header component.
    */
  useEffect(() => {
    // #1
    if (props.onOpenNavbar && !isNavbarOpen) {
      setIsNavbarOpen(true);
    }

    // #2
    if (onBtnClose){
      navbarItemHandler("close_page", "")      
      setOnCloseBtn(false);
    } else {
      document.body.style.overflow = 'hidden';
    }

  }, [props.onOpenNavbar, onBtnClose]);

  return (
    <React.Fragment>
      <CSSTransition
        in={navbarState.isItemClicked}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames="navbar-item-transition"
      >
        <>
          {isMobile && navbarState.isItemClicked && !onBtnClose && <NavbarItemHandler page={navbarState.pageName} />}   
        </>
      </CSSTransition>
      <CSSTransition
        in={isNavbarOpen}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames="mobile-navbar-transition"
      >
        <Modal
          onOpenNavbar={props.onOpenNavbar}
          onCloseNavbar={props.onCloseNavbar}
        >
          <ul className="mobile-navbar">
            <NavbarItem onClick={() => navbarItemHandler("load_page", "about")} iconName={faPeopleGroup} navItemTitle="Quem somos" />
            <NavbarItem onClick={() => navbarItemHandler("load_page", "services")} iconName={faLightbulb} navItemTitle="Serviços" />
            {/* <NavbarItem onClick={() => navbarItemHandler("load_page", "partners")} iconName={faHandshake} navItemTitle="Parceiros" /> */}
            <NavbarItem onClick={() => navbarItemHandler("load_page", "contact")} iconName={faHeadset} navItemTitle="Contato" />
          </ul>
        </Modal>
      </CSSTransition>
    </React.Fragment>
  );
};

export default MobileNavbar;