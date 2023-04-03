import React from 'react';
import ImageSlide from './ImageSlide';
import './Presentation.scss';

const Presentation = () => {
  return (
    <React.Fragment>
      <div className="presentation-headline-container">
        <div className="presentation-headline">
          <h1>
            Shining bright your <span>story</span>!
          </h1>
          <h5>
            Making your <span>events</span> even more <span>special </span>
            with our best <span>lights</span>.
          </h5>
        </div>
      </div>
      <ImageSlide />
    </React.Fragment>
  );
};

export default Presentation;
