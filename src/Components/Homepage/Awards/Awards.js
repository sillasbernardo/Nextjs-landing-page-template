import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

import './Awards.scss';

const Awards = () => {

	const awardTimes = 10;
	const years = 3;
	
  return (
      <div className="awards-container">
        <span className="awards-text">
          Excelência em <span className="awards-text-highlight">qualidade</span>{' '}
          de serviço
        </span>
        <div className="awards">
          <div className='award-icons'>
            <FontAwesomeIcon className='award-icon' icon={faAward} />
            <FontAwesomeIcon className='award-icon' icon={faAward} />
            <FontAwesomeIcon className='award-icon' icon={faAward} />
          </div>
					<span><span className='awards-text-yellow'>{awardTimes} prêmios</span> em {years} anos</span>
        </div>
        <span className="awards-text">
          Relacionamentos <span className="awards-text-highlight">fortes</span>{' '}
          com nossos clientes
        </span>
      </div>
  );
};

export default Awards;
