import React, { forwardRef, useContext } from 'react';

import './Header.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import Navbar from '../Navbar/Navbar';
import logo from '../../../Assets/Img/Homepage/Header/logo.png';
import CallToAction from '../../Utils/CallToAction';

const Header = forwardRef((props, ref) => {
  /*
   * Define how the component will render based on the device type
   */
  const isMobile = useContext(MobileViewContext);

  return (
    <header ref={ref} className={'header-container'}>
      <img src={logo} alt="logo" />
      {!isMobile ? <Navbar onScrollClick={props.onScrollClick} /> : <CallToAction />}
    </header>
  );
});

export default Header;
