import React, { useContext, useState } from 'react';

import './Services.scss';
import { MobileViewContext } from '../../Context/MobileViewContext';
import ServiceSection from './ServiceSection';
import { fetchApi } from '../../Utils/fetchApi';
import CloseButton from '../../Utils/CloseButton';

const Services = React.forwardRef((props, ref) => {
  /* Render pages based on device type */
  const isMobile = useContext(MobileViewContext);

  /* Fetch data from API */
  const [apiData, setApiData] = useState();
  fetchApi('api/homepage/services', setApiData, 'servicesData');

  return (
    <div ref={ref} className="services-container">
      {isMobile && <CloseButton onClose={props.onClose} />}
      {apiData && (
        <ServiceSection
          styles={{
            gridColumn: '1 / span 2',
            backgroundColor: '#151515',
            color: 'white',
          }}
          apiData={apiData.filter((data) => data.serviceTitle !== 'Ações')}
          title="Nossos Serviços"
        />
      )}
      {apiData && (
        <ServiceSection
          styles={{
            gridColumn: '3',
            backgroundColor: '#0a8f08',
            color: 'white',
          }}
          gridColumn="3"
          apiData={apiData.filter((data) => data.serviceTitle === 'Ações')}
          title="Nossas Ações"
        />
      )}
    </div>
  );
});

export default Services;
