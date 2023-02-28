import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import ShowcaseItem from './ShowcaseItem';
import ShowcasePaginate from './ShowcasePaginate';
import './Showcase.scss';
import { fetchApi } from '../../Utils/fetchApi';

const Showcase = () => {

  const [apiData, setApiData] = useState();
	fetchApi("api/gallery/images", setApiData, "images")
  let items = [];

  if (apiData){
    apiData.map(data => {
      let categoryName;

      // remove "-gallery" from original name and uppercase first letter
      const changeName = () => {
        categoryName = data.category.split("-").shift();
        categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
      }
      changeName();

      items.push({
        link: data.link,
        category: categoryName
      })
    })
  }

  /* Handles paginatation */
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

  console.log(currentItems.slice(1, 2))

  return (
    <div className="showcase-container" ref={showcaseRef}>
      {currentItems && (
        <>
        <ShowcasePaginate
          handlePageClick={handlePageClick}
          selectedPage={selectedPage}
          pageCount={pageCount}
        />
        {currentItems === 0 && <h4 className='no-images'>Nenhuma imagem foi encontrada.</h4>}
        <div className="image-grid">
          <ShowcaseItem
            type="image"
            className="image-grid-increase"
            items={currentItems.slice(0, 1)}
          />
          <ShowcaseItem type="image" items={currentItems.slice(1, 5)} />
          {currentItems.length > 4 && <ShowcaseItem
            type="text"
            textMessage="Frase de casamento"
            className="fancy-text"
          />}
          <ShowcaseItem
            type="image"
            className="image-grid-increase"
            items={currentItems.slice(5, 6)}
          />
          <ShowcaseItem type="image" items={currentItems.slice(6, 8)} />
          <ShowcaseItem
            type="image"
            className="image-grid-increase"
            items={currentItems.slice(8, 10)}
          />
          <ShowcaseItem type="image" items={currentItems.slice(10, 12)} />
          {currentItems.length > 8 && <ShowcaseItem
            type="text"
            textMessage="Frase de casamento 2"
            className="fancy-text"
          />}
          <ShowcaseItem type="image" items={currentItems.slice(12, 16)} />
        </div>
        <ShowcasePaginate
          handlePageClick={handlePageClick}
          selectedPage={selectedPage}
          pageCount={pageCount}
        /></>)}
    </div>
  );
};

export default Showcase;
