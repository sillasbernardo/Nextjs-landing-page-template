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
 *
 * galleryCategory = It's only used by the gallery to fetch new images
 * when a category is clicked
 */

import axios from 'axios';
import { useEffect } from 'react';

export const fetchApi = (path, setData, loader, galleryCategory) => {
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_PATH + path, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    })
    .then(result => {
      setData(result.data[loader])
    })
    .catch(error => console.error(error))
  }, [galleryCategory])
};