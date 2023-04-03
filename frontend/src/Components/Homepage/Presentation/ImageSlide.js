import React, { useState, useEffect } from 'react';

import './ImageSlide.scss';
import ButtonSlider from './ButtonSlider';
import { handlerSlideBtn } from "./SliderHandler";
import Images from "../../../Assets/Img/Homepage/Presentation/index";

const ImageSlide = (props) => {
  const [slideIndex, setSlideIndex] = useState(1);

  /* Upload slide image every 'timer' milliseconds */
  useEffect(() => {
    if (slideIndex > Images.length){
      setSlideIndex(1);
    }

    const intervalId = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 7000)

    return () => clearInterval(intervalId);
  })

  return (
    <div className="container-slider">
        {Images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <div id='gray-foreground'></div>
              <img src={image} alt="img" />
            </div>
          );
        })}
        <ButtonSlider moveSlide={() => handlerSlideBtn("next", slideIndex, setSlideIndex, Images)} direction={"next"} />
        <ButtonSlider moveSlide={() => handlerSlideBtn("prev", slideIndex, setSlideIndex, Images)} direction={"prev"} />
    </div>
  );
};

export default ImageSlide;
