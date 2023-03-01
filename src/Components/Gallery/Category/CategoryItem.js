import React, { useContext } from 'react';

import './CategoryItem.scss';
import { GalleryCategoryContext } from '../../Context/GalleryCategoryContext';
import { MobileViewContext } from "../../Context/MobileViewContext";

const CategoryItem = (props) => {
  const [galleryCategory, setGalleryCategory] = useContext(
    GalleryCategoryContext
  );

  const isMobile = useContext(MobileViewContext);

  const handlerOnClick = () => {
    setGalleryCategory(props.name);
    if (isMobile){
      props.closeNavbar();
    }
  }

  return (
    <>
      {props.name && (
        <div
				onClick={handlerOnClick}
          className={
            galleryCategory === props.name
              ? 'gallery-cat-item-selected'
              : 'gallery-cat-item'
          }
        >
          <span className="gallery-cat-title">{props.name}</span>
        </div>
      )}
    </>
  );
};

export default CategoryItem;
