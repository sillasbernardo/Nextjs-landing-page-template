import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageContainer = (props) => {
  /* Show image category when mouse hover over */
  const [isMouseOver, setIsMouseOver] = useState(false);
  const showCategory = (event) => {
    event === 'over' ? setIsMouseOver(true) : setIsMouseOver(false);
  };

  return (
    <>
      <LazyLoadImage
        key={props.item.imageLink}
        onClick={() => props.viewImage('view', props.item.imageLink)}
        className={props.className}
        onMouseEnter={() => showCategory('over')}
        onMouseLeave={() => showCategory('leave')}
        src={props.item.imageLink}
        alt="img"
      />
      {isMouseOver && (
        <span className="item-category">{props.item.imageCategory}</span>
      )}
    </>
  );
};

export default ImageContainer;
