import React from 'react';

import './ImageZoom.scss';

const ImageZoom = (props) => {
  document.body.style.overflow = 'hidden';

  return (
    <>
      <div className="imagezoom-container">
        <img
          className="imagezoom-img"
          src={props.image}
          alt="img"
        />
      </div>
      <div
        onClick={() => {
          props.hideImage('hide', '');
          document.body.style.overflow = 'auto';
        }}
        className="imagezoom-backdrop"
      ></div>
    </>
  );
};

export default ImageZoom;
