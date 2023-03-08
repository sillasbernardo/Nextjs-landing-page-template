import React, { useState, useEffect } from 'react';
import { Puff } from 'react-loader-spinner';

import './LoadingScreen.scss';

const LoadingScreen = (props) => {
  const [loadComponent, setLoadComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadComponent(true);
    }, props.timeout);
    return () => clearTimeout(timer);
  }, [loadComponent]);

  return (
    <>
      {!loadComponent &&
        <div
          className={`loading-screen-container ${props.className}`}
          style={props.styles}
        >
          <Puff height="80" width="80" color={props.spinnerColor} />
        </div>
      }
    </>
  );
};

export default LoadingScreen;
