import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './Header.scss';
import logo from '../../../Assets/Img/logo.gif';
import { MobileViewContext } from '../../Context/MobileViewContext';
import { ClosePageContext } from '../../Context/ClosePageContext';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../Navbar/MobileNavbar';

const Header = (props) => {
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
    trigger ? setIsMobileNavbar(true) : (
      document.body.style.overflow = 'auto',
      setIsMobileNavbar(false)
    );
  };

  /* 
    * the onCloseBtn useState is used by ClosePageContext to broadcast to all Header's children
    * it will be true when a close button is clicked in any page.
  */
 const [onCloseBtn, setOnCloseBtn] = useState(false);

  return (
    <ClosePageContext.Provider value={[onCloseBtn, setOnCloseBtn]}>
      <div id={"header-container"}>
        <img src="https://drive.google.com/file/d/1DdPgyW7dc-JChfUV5PymmhL37B_905-k/view" alt="logo" width="100" />
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
};

export default Header;
