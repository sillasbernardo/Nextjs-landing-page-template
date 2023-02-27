import React from "react";

import './CategoryItem.scss';

const CategoryItem = (props) => {
	return (
		<>
			{props.name && <div className="gallery-cat-item">
				<span className="gallery-cat-title">{props.name}</span>
			</div>}
		</>
	)
}

export default CategoryItem;