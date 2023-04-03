/**
 * This function handles pagination and returns data to Showcase component
 * to be used by Pagination component and ImagesContainer component.
 * 
 * @param {Array} items - Store images with link and category only
 * 
 * @param {number} itemsPerPage - The amount of items per page
 * @param {number} itemOffset - Offset beginning
 * @param {number} endOffset - Offset ending
 * @param {Array} currentItems - Store only "itemsPerPage" quantity of images
 * @param {number} pageCount - Store the amount of pages
 * 
 * @returns {object} currentItems, pageCount, handlePageClick
 */

import { useState } from "react";

export const PaginationHandler = (items) => {
  let itemsPerPage = 12;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items && items.slice(itemOffset, endOffset);
  const pageCount = items && Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return {currentItems, pageCount, handlePageClick}
};
