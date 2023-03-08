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
        key={props.item.link}
        onClick={() => props.viewImage('view', props.item.link)}
        className={props.className}
        onMouseEnter={() => showCategory('over')}
        onMouseLeave={() => showCategory('leave')}
        src={props.item.link}
        alt="img"
      />
      {isMouseOver && (
        <span className="item-category">{props.item.category}</span>
      )}
    </>
  );
};

export default ImageContainer;
