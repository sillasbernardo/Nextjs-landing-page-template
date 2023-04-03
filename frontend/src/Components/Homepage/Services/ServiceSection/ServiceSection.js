import React, { useContext } from 'react';

import { MobileViewContext } from '../../../Context/MobileViewContext';
import ServiceItem from './ServiceItem/ServiceItem';
import './ServiceSection.scss';

const ServiceSection = (props) => {
  const isMobile = useContext(MobileViewContext);

  // Split title in two strings and return array
  let title = props.title.split(' ');

  return (
    <div className={`${props.className} services-section-container`}>
      <div className="services-title-container">
        <span id="services-title">
          {title[0]} <span id="services-title-yellow">{title[1]}</span>
        </span>
      </div>
      <div className="services-items-list">
        {props.apiData &&
          props.apiData.map((service, index) => {
            return (
              <ServiceItem
                key={index}
                image={service.imageLink}
                title={service.serviceTitle}
                isMobile={isMobile}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ServiceSection;
