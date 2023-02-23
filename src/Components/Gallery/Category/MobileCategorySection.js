import React from 'react';
import ReactDOM from 'react-dom';

import CategoryItem from './CategoryItem';
import './MobileCategorySection.scss';

const MobileCategorySection = (props) => {
  const content = (
    <React.Fragment>
      <div className="mob-cat-section">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
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
