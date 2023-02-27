import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import './ScrollUp.scss';

const ScrollUp = (props) => {

  /* Handle CSSTransition animation */
  const [isMouseOver, setIsMouseOver] = useState(false);
  const mouseEnterHandler = (event) => {
    event === 'enter' ? setIsMouseOver(true) : setIsMouseOver(false);
  };

  /* Track scrollY offset to show/hide component */
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const scrollHandle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', scrollHandle);
    return () => window.removeEventListener('scroll', scrollHandle);
  }, [])

  /* Reset CSSTransition if component is clicked */
  const onComponentClickHandler = () => {
    setIsMouseOver(false);
    props.onClickHandler();
  }

  return (
    <>
      {scrollY > 323 && <div
        className="scroll-up-container"
        onMouseEnter={() => mouseEnterHandler('enter')}
        onMouseLeave={mouseEnterHandler}
        onClick={onComponentClickHandler}
      >
        <FontAwesomeIcon className="circle" icon={faCircleUp} />
        <CSSTransition
          in={isMouseOver}
          mountOnEnter
          unmountOnExit
          classNames="circle-transition"
          timeout={700}
        >
          <span>Subir</span>
        </CSSTransition>
      </div>}
    </>
  );
};

export default ScrollUp;
