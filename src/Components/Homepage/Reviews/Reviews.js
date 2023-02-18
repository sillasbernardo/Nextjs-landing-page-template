import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Reviews.scss';
import { loadReviewImages } from './ReviewHandler';
import ReviewImage from './ReviewImage';

const Reviews = () => {
  const [reviewImages, setReviewImages] = useState([]);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    loadReviewImages().then((result) => {
      const imagesArr = result.map((res) => ({ id: uuidv4(), res }));
      setReviewImages(imagesArr);
    });
  }, []);

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
    <div className="reviews-container">
      <span className="reviews-title">
        Veja o que <span className="reviews-title-bold">nossos clientes</span>{' '}
        estão dizendo
      </span>
      {reviewImages.length > 0 && (
        <div className="reviews-images">
          <ReviewImage
            reviewRef={imageRef1}
            onMouseOver={() => handleMouseEnter(imageRef1)}
            onMouseOut={() => handleMouseLeave(imageRef1)}
            image={reviewImages[0].res}
          />
          <ReviewImage
            reviewRef={imageRef2}
            increase
            image={reviewImages[1].res}
          />
          <ReviewImage
            reviewRef={imageRef3}
            onMouseOver={() => handleMouseEnter(imageRef3)}
            onMouseOut={() => handleMouseLeave(imageRef3)}
            image={reviewImages[2].res}
          />
        </div>
      )}
    </div>
  );
};

export default Reviews;
