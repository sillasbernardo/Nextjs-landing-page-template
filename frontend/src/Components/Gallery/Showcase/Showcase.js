/**
 * This component is the right side of the Gallery and it holds Pagination on top and ImagesContainer below it.
 *
 * It fetches all images from a specific category from API and store them in apiData.
 * PaginationHandler takes apiData as argument and returns 3 values.
 *    currentItems: 12 images from apiData
 *    pageCount: The amount of pages defined by total apiData images / 12
 *    handlePageClick: a function to change pages and store new 12 images to currentItems
 *
 * Pagination receives pageCount and handlePageClick as arguments to render page numbers.
 * ImagesContainer receives currentItems as arguments to render images
 */

import React from "react";

import ImagesContainer from "./ImagesContainer/ImagesContainer";
import CategoryViewer from "./CategoryViewer/CategoryViewer";

const Showcase = (props) => {
  return (
    <div>
      <CategoryViewer selectedCategory={props.selectedCategory} />
      <ImagesContainer />
    </div>
  );
};

export default Showcase;
