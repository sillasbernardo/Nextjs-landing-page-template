import React from "react";

/*
 * ShowcaseItem creates images or text for the Showcase component only.
 *
 * ...props.items = expect an array of images to be iterated over and returns an img element for each image passed.
 * props.type = return img element[s] if type is "image" or a span element if type is not defined.
 */
const ShowcaseItem = (props) => {
  if (props.type === 'image') {
    return (
      <>
        {[...props.items].map((item, index) => {
          return (
            <img className={props.className} key={index} src={item} alt="img" />
          );
        })}
      </>
    );
  } else {
    return <span className={props.className}>{props.textMessage}</span>;
  }
};

export default ShowcaseItem;