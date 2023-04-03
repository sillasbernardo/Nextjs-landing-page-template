import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import './Awards.scss';

const Awards = () => {
  const years = new Date().getFullYear() - 2020;

  return (
    <div className="awards-container">
      <span className="awards-text">
        We seek <span className="awards-text-highlight">service quality</span>{' '}
        above all
      </span>
      <div className="awards">
        <div className="award-icons">
          <FontAwesomeIcon className="award-icon" icon={faAward} />
          <FontAwesomeIcon className="award-icon" icon={faAward} />
          <FontAwesomeIcon className="award-icon" icon={faAward} />
        </div>
        <span>
          <span className="awards-text-yellow">10 awards</span>{' '}
          in {years} years
        </span>
      </div>
      <span className="awards-text">
        <span className="awards-text-highlight">Strong relationship </span>
        with our clients
      </span>
    </div>
  );
};

export default Awards;
