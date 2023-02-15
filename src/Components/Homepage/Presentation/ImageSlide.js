import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './ImageSlide.scss';
import ButtonSlider from './ButtonSlider';
import { loadImages, handlerSlideBtn } from "./SliderHandler";

const ImageSlide = () => {
  const [images, setImages] = useState([]); // Store images to be slided
  const [slideIndex, setSlideIndex] = useState(1); // Store the actual index of image in row

  /* 
    * Fetch images from loadImages()
   */
  useEffect(() => {
    loadImages().then((result) => {
      const imagesArray = result.map((image) => ({ id: uuidv4(), image }));
      setImages(imagesArray);
    });
  }, []);

  /* 
    * Upload slider every "timer" miliseconds
  */
  const timer = 7000;
  useEffect(() => {
    if (slideIndex > images.length){
      setSlideIndex(1);
    }

    const intervalId = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, timer)

    return () => clearInterval(intervalId);
  })

  return (
    <div className="container-slider">
      {images &&
        images.map((image, index) => {
          return (
            <div
              key={image.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <div id='gray-foreground'></div>
              <img src={image.image} alt="img" />
            </div>
          );
        })}
        <ButtonSlider moveSlide={() => handlerSlideBtn("next", slideIndex, setSlideIndex, images)} direction={"next"} />
        <ButtonSlider moveSlide={() => handlerSlideBtn("prev", slideIndex, setSlideIndex, images)} direction={"prev"} />
    </div>
  );
};

export default ImageSlide;
