import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import './Awards.scss';
import { fetchApi } from '../../Utils/fetchApi';

const Awards = () => {
  const [apiData, setApiData] = useState();
  fetchApi("api/awards", setApiData, "awardsData");

  if (apiData){
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
            <span><span className='awards-text-yellow'>{apiData.quantity} prêmios</span> em {apiData.years} anos</span>
          </div>
          <span className="awards-text">
            Relacionamentos <span className="awards-text-highlight">fortes</span>{' '}
            com nossos clientes
          </span>
        </div>
    );
  }

};

export default Awards;
