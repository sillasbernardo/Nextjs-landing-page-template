import React from 'react';

import './Services.scss';
import ServiceSection from './ServiceSection/ServiceSection';
import ServicesImages from '../../../Assets/Img/Homepage/Services/index';

const Services = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="services-container">
      <ServiceSection
        className="services-services-section"
        apiData={ServicesImages.filter((data) => data.serviceTitle !== 'Social')}
        title="Business Services"
      />
      <ServiceSection
        className="actions-services-section"
        apiData={ServicesImages.filter((data) => data.serviceTitle === 'Social')}
        title="Social Services"
      />
    </div>
  );
});

export default Services;
