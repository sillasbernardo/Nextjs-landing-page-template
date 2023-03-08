import React, { useContext, useState, useReducer } from 'react';
import { CSSTransition } from 'react-transition-group';

import ShowcaseItem from './ShowcaseItem';
import ShowcasePaginate from './ShowcasePaginate';
import './Showcase.scss';
import { fetchApi } from '../../Utils/fetchApi';
import { GalleryCategoryContext } from '../../Context/GalleryCategoryContext';
import { PaginateHandler } from './PaginateHandler';
import ImageZoom from './ImageZoom';

const viewImageReducer = (state, action) => {
  switch (action.type) {
    case 'VIEW':
      return {
        viewImage: true,
        imageSrc: action.link,
      };
    case 'HIDE':
      return {
        viewImage: false,
        imageSrc: action.link,
      };
  }
};

const Showcase = () => {
  /* fetch images from API */
  const [apiData, setApiData] = useState();
  fetchApi('api/gallery/images', setApiData, 'images');
  let items = [];

  const [galleryCategory, setGalleryCategory] = useContext(
    GalleryCategoryContext
  );

  /* Filter data returning the image link and category */
  if (apiData) {
    apiData.map((data) => {
      let categoryName;

      // remove "-gallery" from original name and uppercase first letter
      const changeName = () => {
        categoryName = data.category.split('-').shift();
        categoryName =
          categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
      };
      changeName();

      if (galleryCategory !== 'Todos' && galleryCategory === categoryName) {
        items.push({
          link: data.link,
          category: categoryName,
        });
      } else if (galleryCategory === 'Todos') {
        items.push({
          link: data.link,
          category: categoryName,
        });
      } else {
        return;
      }
    });
  }

  /* Handles paginatation */
  const {
    showcaseRef,
    currentItems,
    pageCount,
    selectedPage,
    handlePageClick,
  } = PaginateHandler(items);

  /* useReducer to handle a click in image to zoom in */
  const [viewImageState, viewImageDispatch] = useReducer(viewImageReducer, {
    viewImage: false,
    imageSrc: '',
  });

  const viewImageHandler = (option, link) => {
    option === 'view'
      ? viewImageDispatch({ type: 'VIEW', link })
      : viewImageDispatch({ type: 'HIDE', link });
  };

  return (
    <div className="showcase-container" ref={showcaseRef}>
      <CSSTransition
        timeout={500}
        in={viewImageState.viewImage}
        unmountOnExit
        mountOnEnter
        classNames={'view-photo-transition'}
      >
        <>
          {viewImageState.viewImage && (
            <ImageZoom
              hideImage={viewImageHandler}
              image={viewImageState.imageSrc}
            />
          )}
        </>
      </CSSTransition>
      {currentItems && (
        <>
          <ShowcasePaginate
            handlePageClick={handlePageClick}
            selectedPage={selectedPage}
            pageCount={pageCount}
          />
          {currentItems === 0 && (
            <h4 className="no-images">Nenhuma imagem foi encontrada.</h4>
          )}
          <div className="image-grid">
            <ShowcaseItem
              type="image"
              className="image-grid-increase"
              viewImage={viewImageHandler}
              items={currentItems.slice(0, 1)}
            />
            <ShowcaseItem
              viewImage={viewImageHandler}
              type="image"
              items={currentItems.slice(1, 5)}
            />
            <ShowcaseItem
              viewImage={viewImageHandler}
              type="image"
              className="image-grid-increase"
              items={currentItems.slice(5, 6)}
            />
            <ShowcaseItem
              viewImage={viewImageHandler}
              type="image"
              items={currentItems.slice(6, 8)}
            />
            <ShowcaseItem
              viewImage={viewImageHandler}
              type="image"
              className="image-grid-increase"
              items={currentItems.slice(8, 10)}
            />
            <ShowcaseItem
              viewImage={viewImageHandler}
              type="image"
              items={currentItems.slice(10, 16)}
            />
          </div>
          <ShowcasePaginate
            handlePageClick={handlePageClick}
            selectedPage={selectedPage}
            pageCount={pageCount}
          />
        </>
      )}
    </div>
  );
};

export default Showcase;
