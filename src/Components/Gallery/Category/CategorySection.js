import React, { useState } from "react";

import CategoryItem from "./CategoryItem";
import './CategorySection.scss';
import { fetchApi } from "../../Utils/fetchApi";

const CategorySection = () => {

	const [apiData, setApiData] = useState();
	fetchApi("api/gallery/categories", setApiData, "categoriesData")

	return (
		<div className="category-section-container">
			{apiData && apiData.map((category, index) => {
				return (
					<CategoryItem key={index} name={category}/>
				)
			})}
		</div>
	)
}

export default CategorySection;