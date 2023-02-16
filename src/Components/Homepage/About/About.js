import React from 'react';

import './About.scss';
import aboutPhoto from '../../../Assets/Img/about_img.png';

const About = () => {
  return (
    <div className="about-container">
      <img className='about-image' src={aboutPhoto} alt="img" />
      <div className="about-description">
        <span className='about-desc-title'>
          Quem <span className="about-desc-title-bold">somos</span>
        </span>
        <p>
          {' '}
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
        </p>
      </div>
    </div>
  );
};

export default About;
