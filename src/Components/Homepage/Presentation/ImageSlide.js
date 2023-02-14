import React, { useState, useEffect, useRef } from 'react';

import './ImageSlide.scss';

const IMAGES = [];
const loadImages = async () => {
  for (let i = 1; i <= 10; i++) {
    const img = await import(
      `../../../Assets/Img/ImageSlide/imageslide_${i}.jpeg`
    );
    IMAGES.push(img.default);
  }

  return IMAGES;
};

const ImageSlide = () => {
  const [images, setImages] = useState();
  const [slidePosX, setSlidePosX] = useState();
	const slideRef = useRef(null);
	const imageRef = useRef(null);

  useEffect(() => {
    loadImages().then((result) => setImages(result));
  }, []);

/*   useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);  
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]); */

	useEffect(() => {
		const intervalId = setInterval(() => {
			const { offsetLeft } = slideRef.current;
			const { width } = imageRef.current;
			setSlidePosX(offsetLeft - width);
			console.log(slidePosX)
		}, 5000)

		return () => clearInterval(intervalId);
	})

  return (
    <ul ref={slideRef} style={{position: "relative", left: slidePosX}} className="presentation-image-slide">
      {images &&
        images.map((image, index) => {
          return <img className='presentation-image' ref={imageRef} key={index} src={image} alt="img" />;
        })}
    </ul>
  );
};

export default ImageSlide;
