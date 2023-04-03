/**
 * Gallery receives "id" as params from Services and pass it to sidebar and showcase.
 * Sidebar uses "id" to set isActive to true in Sidebar component, making the current category yellowish.
 * Showcase uses "id" to fetch the correct images from database
 */

import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import Sidebar from "../Components/Gallery/Sidebar/Sidebar";
import Showcase from "../Components/Gallery/Showcase/Showcase";
import { ImagesFetchContext } from "../Components/Gallery/GalleryContext/ImagesFetchContext";

const Gallery = () => {
  const { id } = useParams();

  // When imagesFetch receives a nextCursor value
  // the API is called and returns more images to be loaded.
  // if loadFetchApi is set to true, then fetchApi will only return a new set of images
  // from another category.
  const [imagesFetch, setImagesFetch] = useState({
    imagesId: "",
    isSidebarCall: false
  });

  return (
    <ImagesFetchContext.Provider value={[imagesFetch, setImagesFetch]}>
      {!id ? <Navigate to={"/gallery/Casamentos"} /> : null}
      <div className="gallery-container">
        <Sidebar className="g-sidebar" selectedCategory={id} />
        <Showcase selectedCategory={id} />
      </div>
    </ImagesFetchContext.Provider>
  );
};

export default Gallery;
