import React, { useContext, useState } from 'react';

import './About.scss';
import { MobileViewContext } from "../../Context/MobileViewContext";
import CloseButton from "../../Utils/CloseButton";
import { fetchApi } from "../../Utils/fetchApi";
import LoadingScreen from '../../Utils/LoadingScreen';

const About = React.forwardRef((props, ref) => {
  /* props.onClose pass a function to close
    page "About" on mobile view only.
  */

  const isMobile = useContext(MobileViewContext);

  const [apiData, setApiData] = useState();

  fetchApi("api/about", setApiData, "aboutData");

  if (!apiData && isMobile){
    return (
      <LoadingScreen className={'about-bg-color'} spinnerColor="#131313" />
    )
  }

  return (
    <div ref={ref} className="about-container">
      <div className="about-top">
        {apiData && <img className="about-image" src={apiData.image[0].link} alt="img" />}
        {isMobile && <CloseButton
          onClose={props.onClose}
        />}
      </div>
      <div className="about-description">
        <span className="about-desc-title">
          Quem <span className="about-desc-title-bold">somos</span>
        </span>
        {apiData && <div className='description-text' dangerouslySetInnerHTML={{__html: apiData.document}}>
        </div>}
      </div>
    </div>
  );

});

export default About;
