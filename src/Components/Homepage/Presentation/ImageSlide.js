import React, { useState, useEffect } from 'react';

import './ImageSlide.scss';
import ButtonSlider from './ButtonSlider';
import { handlerSlideBtn } from "./SliderHandler";
import { fetchApi } from "../../Utils/fetchApi";

const ImageSlide = (props) => {
  const [images, setImages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  /* Fetch images from API */
  fetchApi("api/homepage/presentation/", setImages, "presentationData");

  /* Upload slide image every 'timer' milliseconds */
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

  if (images){
    setTimeout(() => {
      props.setIsImages(true);
    }, 2500)
  }

  return (
    <div className="container-slider">
      {images &&
        images.map((image, index) => {
          return (
            <div
              key={image.name}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <div id='gray-foreground'></div>
              <img src={image.link} alt="img" />
            </div>
          );
        })}
        <ButtonSlider moveSlide={() => handlerSlideBtn("next", slideIndex, setSlideIndex, images)} direction={"next"} />
        <ButtonSlider moveSlide={() => handlerSlideBtn("prev", slideIndex, setSlideIndex, images)} direction={"prev"} />
    </div>
  );
};

export default ImageSlide;
