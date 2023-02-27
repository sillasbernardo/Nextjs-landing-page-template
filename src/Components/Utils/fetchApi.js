import axios from "axios";
import { useEffect } from "react";

/* 
	* This files handles all the fetchings of this project.
	* It is called by every component that needs to load
	* data from the API.
	*
	* path = The API path. Eg: (api/example)
	* 
	* setData = a setState function that fetchApi will use
	* to pass the resolved data to the caller component.
	*
	* loader = Each component that calls fetchApi needs to
	* access a different property in the result data.
	* Eg: "api.data.example or api.data['example']"
 */
export const fetchApi = (path, setData, loader) => {

	useEffect(() => {
		const loadData = async () => {
			const api = await axios.get(`http://localhost:5000/${path}`, {
				headers: {
					Authorization: process.env.REACT_APP_API_KEY
				}
			})
			setData(api.data[loader])
		}
		loadData();
	}, [])
}