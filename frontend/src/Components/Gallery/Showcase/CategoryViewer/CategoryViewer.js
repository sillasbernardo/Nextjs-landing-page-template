import React from "react";

import './CategoryViewer.scss';

const CategoryViewer = (props) => {
  return (
    <div className="category-viewer">
      <span className="category-viewer-text">{props.selectedCategory}</span>
    </div>
  )
}

export default CategoryViewer;