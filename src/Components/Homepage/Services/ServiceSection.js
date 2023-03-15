import React, { useContext, useEffect, useState } from 'react';

import { MobileViewContext } from '../../Context/MobileViewContext';
import GalleryViewItem from './GalleryViewItem';
import LoadingScreen from '../../Utils/LoadingScreen';
import './ServiceSection.scss';

const ServiceSection = (props) => {
  const isMobile = useContext(MobileViewContext);

  // Receives a title prop to dynamically display between "Serviços" and "Ações"
  let title = [];
  if (props.title) {
    title.push(props.title.split(' ').shift());
    title.push(props.title.split(' ').pop());
  }

  return (
    <>
      {isMobile && <LoadingScreen timeout={1500} styles={{backgroundColor: "#131313"}} spinnerColor="#fff" />}
      <div style={props.styles} className="services-section-container">
        <div className="services-title-container">
          <span id="services-title">
            {title[0]} <span id="services-title-yellow">{title[1]}</span>
          </span>
        </div>
        <div className="services-items-list">
          {props.apiData &&
            props.apiData.map((service, index) => {
              return (
                <GalleryViewItem
                  key={index}
                  image={service.imageLink}
                  title={service.serviceTitle}
                  isMobile={isMobile}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
