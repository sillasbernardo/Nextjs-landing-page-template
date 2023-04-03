import React, { useState, useContext, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./ImagesContainer.scss";
import ImageHoverView from "./ImageHoverView/ImageHoverView";
import ImageZoom from "./ImageZoom/ImageZoom";
import { ImagesFetchContext } from "../../GalleryContext/ImagesFetchContext";

// Used for offline image fetching
import imageFiles from "../../../../Assets/Img/Gallery-temp/index";

const ImagesContainer = (props) => {
  // handles zooming images
  const [imageZoomProperties, setImageZoomProperties] = useState({
    isZoom: false,
    imageLink: "",
  });

  // Used to multiplicate images in imagesData (offline mode only)
  const times = 3;
  const imagesData = imageFiles.map(img => {
    for (let i = 0; i < times; i++){
      return img.imageLink;
    }
  })

  // Used to scroll up when component loads
  const imageContainerRef = useRef(null);

  // gets the selected category (id)
  const { id } = useParams();

  // gets changed when user clicks on sidebar item
  const [imagesFetch, setImagesFetch] = useContext(ImagesFetchContext);

  // On first load, render 12 images from the current selectedCategory, get the id from useParams
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState("");

  useEffect(() => {
    setImages([]);
    fetchImages();
    imageContainerRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [imagesFetch])

  // Used to fetch data offline
  const [imagesOffset, setImagesOffset] = useState(0);
  const fetchImages = () => {
    const imagesToAdd = imagesData.slice(imagesOffset, imagesOffset + 12)
    setImages(imagesToAdd);
    setImagesFetch(imagesOffset + 12)
  }

  // Used to fetch data from Cloudinary
/*   const fetchImages = () => {
    axios.get(
      process.env.REACT_APP_API_PATH + `api/gallery/categories/${id}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
        params: {
          imagesLimit: 12,
          tagName: id,
          nextCursor: nextCursor,
        },
      }
    )
    .then((response) => {
      // This adds new images to existing ones
      setImages((prevImages) => [...prevImages, ...response.data.transformedImagesData])
      setNextCursor(response.data.nextCursor)
    })
    .catch((error) => console.error(error))
  } */

  return (
    <>
      {imageZoomProperties.isZoom && (
        <ImageZoom
          onClose={setImageZoomProperties}
          imageLink={imageZoomProperties.imageLink}
        />
      )}
      <div className="images-container" ref={imageContainerRef}>
        <div className="images-inner-container">
          <div className="i-c-images-container">
            <InfiniteScroll
              dataLength={images.length}
              hasMore={!!nextCursor}
              next={fetchImages}
              className="i-c-images-grid"
            >
              {images &&
                images.map((image, index) => {
                  return (
                    <ImageHoverView
                      onClick={() =>
                        setImageZoomProperties({
                          isZoom: true,
                          imageLink: image, // imageLink has to be image.link if fetched from cloudinary
                        }) 
                      }
                      key={index}
                    >
                      <LazyLoadImage className="i-c-image" src={image} />; {/* src has to be image.link if fetched from cloudinary */}
                    </ImageHoverView>
                  );
                })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesContainer;
