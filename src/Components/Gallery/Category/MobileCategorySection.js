import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CategoryItem from './CategoryItem';
import { fetchApi } from '../../Utils/fetchApi';
import './MobileCategorySection.scss';

const MobileCategorySection = (props) => {

  const [apiData, setApiData] = useState();
	fetchApi("api/gallery/categories", setApiData, "categoriesData")

  const content = (
    <React.Fragment>
      <div className="mob-cat-section">
        {apiData && apiData.map((category, index) => {
          return (
            <CategoryItem key={index} name={category}/>
          )
        })}
      </div>
			<div onClick={props.closeNavbar} className='gallery-nav-backdrop'></div>
    </React.Fragment>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('gallery-navbar-hook')
  );
};

export default MobileCategorySection;
