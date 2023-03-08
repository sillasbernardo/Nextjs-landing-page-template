/*
 * ShowcaseItem creates images or text for the Showcase component only.
 *
 * ...props.items = expect an array of images to be iterated over and returns an img element for each image passed.
 * props.type = return img element[s] if type is "image" or a span element if type is not defined.
 */

import React from 'react';

import ImageContainer from './ImageContainer';

const ShowcaseItem = (props) => {
  if (props.type === 'image') {
    return (
      <>
        {[...props.items].map((item, index) => {
          return (
            <div key={index} className={`image-container ${props.className}`}>
              <ImageContainer {...props} item={item} />
            </div>
          );
        })}
      </>
    );
  } else {
    return <span className={props.className}>{props.textMessage}</span>;
  }
};

export default ShowcaseItem;
