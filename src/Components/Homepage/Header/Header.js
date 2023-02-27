import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './Header.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import { ClosePageContext } from '../../Context/ClosePageContext';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import logo from "../../../Assets/Img/logo.gif"

const Header = forwardRef((props, ref) => {
  /*
   * This context makes all mobile rendering in Header when set to true
   */
  const isMobile = useContext(MobileViewContext);

  /*
   * This state is used to render the mobile navbar since the desktop navbar component
   * is different from the mobile's
   */
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  const mobileNavbarHandler = (trigger) => {
    trigger
      ? setIsMobileNavbar(true)
      : ((document.body.style.overflow = 'auto'), setIsMobileNavbar(false));
  };

  /*
   * the onCloseBtn useState is used by ClosePageContext to broadcast to all Header's children
   * it will be true when a close button is clicked in any page.
   */
  const [onCloseBtn, setOnCloseBtn] = useState(false);

  return (
    <ClosePageContext.Provider value={[onCloseBtn, setOnCloseBtn]}>
      <div ref={ref} id={'header-container'}>
        <img
          src={logo}
          alt="logo"
          width="100"
        />
        {isMobile ? (
          <FontAwesomeIcon
            onClick={() => mobileNavbarHandler(true)}
            id="header-bars-icon"
            icon={solid('bars')}
          />
        ) : (
          <Navbar onScrollClick={props.onScrollClick} />
        )}
        <>
          {isMobileNavbar && isMobile && (
            <MobileNavbar
              onOpenNavbar={isMobileNavbar}
              onCloseNavbar={mobileNavbarHandler}
            />
          )}
        </>
      </div>
    </ClosePageContext.Provider>
  );
});

export default Header;
