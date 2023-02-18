import React from 'react';

import './ReviewImage.scss';

const ReviewImage = (props) => {
  return (
		<img
			onMouseOver={props.onMouseOver}
			onMouseOut={props.onMouseOut}
			ref={props.reviewRef}
			className={props.increase ? 'r-i-image increase' : 'r-i-image'}
			src={props.image}
			alt="img"
		/>
  );
};

export default ReviewImage;
