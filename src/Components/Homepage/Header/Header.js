import React, { forwardRef, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './Header.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import { ClosePageContext } from '../../Context/ClosePageContext';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import logo from '../../../Assets/Img/logo.gif';

const Header = forwardRef((props, ref) => {
  /*
   * Define how the component will render based on the device type
   */
  const isMobile = useContext(MobileViewContext);

  /*
   * Render a mobile navbar version if device is mobile.
   */
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  const mobileNavbarHandler = (trigger) => {
    trigger
      ? setIsMobileNavbar(true)
      : ((document.body.style.overflow = 'auto'), setIsMobileNavbar(false));
  };

  /*
   * This context handles when user click in the close button from any page.
   *
   * Since many pages have a close button (mobile version only), and closing this button
   * change some states in the app. This context is used by other components to know how to
   * behave when the close button is clicked.
   */
  const [onCloseBtn, setOnCloseBtn] = useState(false);

  const [apiData, setApiData] = useState();
  fetchApi('/api/logo', setApiData, 'logoData')
  console.log(apiData)

  return (
    <ClosePageContext.Provider value={[onCloseBtn, setOnCloseBtn]}>
      <div ref={ref} id={'header-container'}>
        {apiData && <img src={apiData.link} alt="logo" width="100" />}
        {isMobile ? (
          <div className='header-icons'>
            <FontAwesomeIcon
              onClick={() => mobileNavbarHandler(true)}
              id="header-bars-icon"
              icon={solid('bars')}
            />
          </div>
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
