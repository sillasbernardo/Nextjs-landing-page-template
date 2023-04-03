import React, { useRef } from 'react';

import './Reviews.scss';
import ReviewImage from './ReviewImage';
import Images from '../../../Assets/Img/Homepage/Reviews/index';

const Reviews = React.forwardRef((props, ref) => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const handleMouseEnter = (element) => {
    element.current.classList.add('increase');
    imageRef2.current.classList.remove('increase');
  };

  const handleMouseLeave = (element) => {
    element.current.classList.remove('increase');
    imageRef2.current.classList.add('increase');
  };

  /* 
	Make images scale when mouse hover and shrink middle image

	onMouseOver and onMouseOut will be used to listen to when the mouse acts out
 */

  return (
    <div ref={ref} className="reviews-container">
      <span className="reviews-title">
        See what <span className="reviews-title-bold">our clients</span>{' '}
        are saying
      </span>
      <div className="reviews-images">
        <ReviewImage
          reviewRef={imageRef1}
          onMouseOver={() => handleMouseEnter(imageRef1)}
          onMouseOut={() => handleMouseLeave(imageRef1)}
          image={Images[0]}
        />
        <ReviewImage
          reviewRef={imageRef2}
          increase
          image={Images[1]}
        />
        <ReviewImage
          reviewRef={imageRef3}
          onMouseOver={() => handleMouseEnter(imageRef3)}
          onMouseOut={() => handleMouseLeave(imageRef3)}
          image={Images[2]}
        />
      </div>
    </div>
  );
});

export default Reviews;
