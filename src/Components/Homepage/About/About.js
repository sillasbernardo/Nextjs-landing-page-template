import React, { useContext, useState } from 'react';

import './About.scss';
import aboutPhoto from '../../../Assets/Img/about_img.png';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileViewContext } from "../../Context/MobileViewContext";
import CloseButton from "../../Utils/CloseButton";
import { fetchApi } from "../../Utils/fetchApi";

const About = React.forwardRef((props, ref) => {
  /* props.onClose pass a function to close
    page "About" on mobile view only.
  */

  const isMobile = useContext(MobileViewContext);

  const [apiData, setApiData] = useState();

  fetchApi("api/about", setApiData, "aboutData");

  console.log(apiData)

  return (
    <div ref={ref} className="about-container">
      <div className="about-top">
        <img className="about-image" src={aboutPhoto} alt="img" />
        {isMobile && <CloseButton
          onClose={props.onClose}
        />}
      </div>
      <div className="about-description">
        <span className="about-desc-title">
          Quem <span className="about-desc-title-bold">somos</span>
        </span>
        <div className='description-text'>
          <pre>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis
            mattis pharetra. Donec odio diam, mattis non sem non, malesuada
            dapibus quam. Aenean elementum velit sed justo dictum, egestas auctor
            risus sagittis. Vestibulum pretium felis urna, tincidunt eleifend
            justo volutpat et. Ut viverra augue quis laoreet placerat. Mauris
            luctus magna felis, ut lacinia augue tincidunt non. Curabitur non eros
            vel sapien fermentum pretium. Morbi ullamcorper mauris sit amet dolor
            vehicula volutpat. Morbi eu sem dapibus, posuere purus in, euismod
            sem. Nunc rutrum mauris eget tortor blandit, facilisis hendrerit justo
            gravida. Duis quis commodo quam, sit amet laoreet quam. Pellentesque
            aliquam nunc justo, ac hendrerit arcu eleifend et. Etiam nec nulla at
            libero imperdiet viverra posuere sit amet est. Suspendisse metus mi,
            sagittis in lorem sed, posuere semper erat. Vivamus eu condimentum
            nisi. Cras lacinia mi pellentesque consequat mollis. Morbi maximus
            congue molestie. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam sagittis mattis pharetra. Donec odio diam, mattis non sem
            non, malesuada dapibus quam. Aenean elementum velit sed justo dictum,
            egestas auctor risus sagittis. Vestibulum pretium felis urna,
            tincidunt eleifend justo volutpat et. Ut viverra augue quis laoreet
            placerat. Mauris luctus magna felis, ut lacinia augue tincidunt non.
            Curabitur non eros vel sapien fermentum pretium. Morbi ullamcorper
            mauris sit amet dolor vehicula volutpat. Vestibulum pretium felis
            urna, tincidunt eleifend justo volutpat et. Ut viverra augue quis
            laoreet placerat. Mauris luctus magna felis, ut lacinia augue
            tincidunt non. Curabitur non eros vel sapien fermentum pretium. Morbi
            ullamcorper mauris sit amet dolor vehicula volutpat. Morbi eu sem
            dapibus, posuere purus in, euismod sem. Nunc rutrum mauris eget tortor
            blandit, facilisis hendrerit justo gravida. Duis quis commodo quam,
            sit amet laoreet quam. Pellentesque aliquam nunc justo, ac hendrerit
            arcu eleifend et. Etiam nec nulla at libero imperdiet viverra posuere
            sit amet est.
          </pre>          
        </div>
      </div>
    </div>
  );
});

export default About;
