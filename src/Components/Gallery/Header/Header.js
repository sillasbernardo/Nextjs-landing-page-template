import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import logo from '../../../Assets/Img/logo.gif';
import './Header.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import CloseButton from '../../Utils/CloseButton';
import NavbarItem from '../../Homepage/Navbar/Navbar_Item';
import CallToAction from '../../Utils/CallToAction';
import MobileCategorySection from '../Category/MobileCategorySection';

const Header = () => {
  const isMobile = useContext(MobileViewContext);

  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  if (isMobile) {
    return (
      <React.Fragment>
        <CSSTransition
          in={isMobileNavbar}
          mountOnEnter
          unmountOnExit
          timeout={300}
          classNames="mob-nav-transition"
        >
          <>
            {isMobileNavbar && (
              <MobileCategorySection
                closeNavbar={() => setIsMobileNavbar(false)}
              />
            )}
          </>
        </CSSTransition>
        <div className="gallery-header-container">
          <div className="gallery-logo">
            <img src={logo} width="100" alt="img" />
          </div>
          <div className="gallery-header-bottom">
            {isMobile && (
              <FontAwesomeIcon
                onClick={() => setIsMobileNavbar(true)}
                className="gallery-header-bars-icon"
                icon={faBars}
              />
            )}
            <span className="gallery-header-title">Galeria de fotos</span>
            <Link to={`/`}>
              <CloseButton className="gallery-close-btn" />            
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div className="gallery-header-container">
        <img src={logo} width="100" alt="img" />
        <span className="gallery-header-title">Galeria de fotos</span>
        <div className="gallery-header-navbar">
          <NavbarItem
            className="gallery-navbar-item"
            iconName={faHome}
            navItemTitle="Home"
          />
          <CallToAction />
        </div>
      </div>
    );
  }
};

export default Header;
