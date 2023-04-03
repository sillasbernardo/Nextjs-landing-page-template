import React from 'react';

import './AboutPerson.scss';

const AboutPerson = ({ Image }) => {
  return (
    <div className="about-image-name">
      <img className="about-image" src={Image} alt="img" />
      <span>
      John Michaels
      </span>
    </div>
  );
};

export default AboutPerson;
