import { useRef, useState } from "react";

export const PaginateHandler = (items) => {
	let itemsPerPage = 16;

  const showcaseRef = useRef(null);

  /* Syncronizes the page with another ShowcasePaginate */
  const [selectedPage, setSelectedPage] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items && items.slice(itemOffset, endOffset);
  const pageCount = items && Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    showcaseRef.current.scrollIntoView({ behavior: 'smooth' });
    setSelectedPage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

	return {showcaseRef, currentItems, pageCount, selectedPage, handlePageClick}
}