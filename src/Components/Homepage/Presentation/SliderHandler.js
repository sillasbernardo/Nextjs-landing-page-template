import { useEffect } from "react";

/*
 * loadImages() loads all images in ImageSlide folder asynchronously
 */
const IMAGES = [];
export const loadImages = async () => {
  // For prod: 10 instead of 6
  for (let i = 1; i <= 6; i++) {
    const img = await import(
      `../../../Assets/Img/ImageSlide/imageslide_${i}.jpg`
    );
    IMAGES.push(img.default);
  }

  return IMAGES;
};


/* 
  * handlerSlideBtn trigger next image in slider
  * 
  * handlerSlideBtn accepts 3 properties:
  *   button - defines which button is being triggered
  *   slideIndex - the state storing the the actual shown image index
  *   setSlideIndex - the state setter to store the next index
  *   images - the state array
 */
export const handlerSlideBtn = (button, slideIndex, setSlideIndex, images) => {
  switch (button){
    case "next":
      if (slideIndex !== images.length) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(1);
      }
      break;

    case "prev":
      if (slideIndex <= 1){
        setSlideIndex(images.length)
      } else {
        setSlideIndex(slideIndex - 1)
      }
      break;

    default:
      console.error('Invalid button passed');
  }
}