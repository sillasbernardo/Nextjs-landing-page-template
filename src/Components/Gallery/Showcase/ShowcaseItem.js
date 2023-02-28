import React, { useState } from 'react';
/*
 * ShowcaseItem creates images or text for the Showcase component only.
 *
 * ...props.items = expect an array of images to be iterated over and returns an img element for each image passed.
 * props.type = return img element[s] if type is "image" or a span element if type is not defined.
 */
const ImageContainer = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const showCategory = (event) => {
    event === "over" ? setIsMouseOver(true) : setIsMouseOver(false);
  }

  return (
    <>
    <img
    className={props.className}
    onMouseEnter={() => showCategory("over")}
    onMouseLeave={() => showCategory("leave")}
    src={props.item.link}
    alt="img"
    />
    {isMouseOver && <span className='item-category'>{props.item.category}</span>}
    </>
  )
}

const ShowcaseItem = (props) => {

  if (props.type === 'image') {
    return (
      <>
        {[...props.items].map((item, index) => {
          return  (
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
