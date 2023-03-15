import React, { useContext, useEffect, useState } from 'react';

import './About.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import CloseButton from '../../Utils/CloseButton';
import { fetchApi } from '../../Utils/fetchApi';
import LoadingScreen from '../../Utils/LoadingScreen';

const About = React.forwardRef((props, ref) => {
  /* Render pages based on device type */
  const isMobile = useContext(MobileViewContext);

  /* Fetch data from API */
  const [apiData, setApiData] = useState();
  fetchApi('api/homepage/about', setApiData, 'aboutData');

  /* This fix a bug which the span "Ricardo Bergem" renders before everything else. */
  const [isLoaded, setIsloaded] = useState(false);
  useEffect(() => {
    const time = setTimeout(() => {
      setIsloaded(true)
    }, 1000)

    return () => clearTimeout(time)
  }, [isLoaded])

  return (
    <>
      {isMobile && (
        <LoadingScreen
          timeout={2500}
          styles={{
            background: 'linear-gradient(to bottom, #E2E2E2, #e2e2e2cc)',
          }}
          spinnerColor="#131313"
        />
      )}
      {apiData && (
        <div ref={ref} className="about-container">
          <div className="about-top">
            <div className="about-image-name">
              <img
                className="about-image"
                src={apiData.image}
                alt="img"
              />
              {isLoaded && <span>Ricardo <span className="ab-img-name-bold">Bergem</span>
              </span>}
            </div>
            {isMobile && <CloseButton onClose={props.onClose} />}
          </div>
          <div className="about-description">
            <span className="about-desc-title">
              Quem <span className="about-desc-title-bold">somos</span>
            </span>
            <div
              className="description-text"
              dangerouslySetInnerHTML={{ __html: apiData.document }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
});

export default About;
