import React from "react";

import CategoryItem from "./CategoryItem";
import './CategorySection.scss';

const CategorySection = () => {
	return (
		<div className="category-section-container">
			{Array.from({length: 3}).map((item) => {
				return (
					<CategoryItem key={Math.random()} />
				)
			})}
		</div>
	)
}

export default CategorySection;