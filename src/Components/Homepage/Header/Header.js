import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './Header.scss';
import logo from '../../../Assets/Img/logo.gif';
import { MobileViewContext } from '../../Context/MobileViewContext';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../Navbar/MobileNavbar';

const Header = () => {
  /*
   * If isMobile receives "true", mobile view is rendered.
   * Otherwise, desktop view is rendered.
   */
  const isMobile = useContext(MobileViewContext);

  /*
   * If IsMobileNavbar is true, navbar options show up.
   * Mobile view only
   */
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  const mobileNavbarHandler = (trigger) => {
    trigger ? setIsMobileNavbar(true) : setIsMobileNavbar(false);
  };

  return (
    <div id={"header-container"}>
      <img src={logo} alt="logo" width="100" />
      {isMobile ? (
        <FontAwesomeIcon
          onClick={() => mobileNavbarHandler(true)}
          id="header-bars-icon"
          icon={solid('bars')}
        />
      ) : (
        <Navbar /> 
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
  );
};

export default Header;
