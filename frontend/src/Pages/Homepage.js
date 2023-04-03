import React, { useContext, useRef, useCallback } from 'react';

import Header from '../Components/Homepage/Header/Header';
import Presentation from '../Components/Homepage/Presentation/Presentation';
import Awards from '../Components/Homepage/Awards/Awards';
import './Homepage.scss';
import Reviews from '../Components/Homepage/Reviews/Reviews';
import About from '../Components/Homepage/About/About';
import Services from '../Components/Homepage/Services/Services';
import Footer from '../Components/Homepage/Footer/Footer';
import { MobileViewContext } from '../Components/Context/MobileViewContext';
import Partners from '../Components/Homepage/Partners/Partners';
import Contact from '../Components/Homepage/Contact/Contact';
import ScrollUp from '../Components/Homepage/ScrollUp';

const Homepage = () => {
  /* Render elements based on device type */
  const isMobile = useContext(MobileViewContext);

  /* These refs are used to smooth scroll to the component when a navbar item is clicked */
  const headerRef = useRef(null);
  const reviewRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const partnersRef = useRef(null);

  const onPagesHandler = useCallback(
    (page) => {
      switch (page) {
        case 'header':
          headerRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'review':
          reviewRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'services':
          servicesRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'partners':
          partnersRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          throw new Error(`Invalid page: ${page}`);
      }
    },
    [headerRef, reviewRef, aboutRef, servicesRef, partnersRef]
  );

  return (
    <>
      <ScrollUp onClickHandler={() => onPagesHandler('header')} />
      <Header ref={headerRef} onScrollClick={onPagesHandler} />
      <Presentation />
      <Awards />
      <Reviews ref={reviewRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Partners ref={partnersRef} />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
