/*
 * The function fetchApi uses axios to fetch data from the API and
 * returns an array.
 * 
 * @parameters:
 *    path = The API path that is passed through process.env.REACT_APP_API_PATH 
 *    (You must have dotenv setup in webpack)
 *
 *    setData = A setState function that fetchApi uses
 *    to store the resolved data and send to the component that called.
 *
 *    loader = Each component that calls fetchApi needs to
 *    access a different property in the result data.
 *    Eg: "api.data.example or api.data['example']"
 *
 *    galleryCategory = It's only used by the gallery to fetch new images
 *    when a category is clicked
 */

import axios from 'axios';
import { useEffect } from 'react';

export const fetchApi = (path, setData, params, callerArgs) => {
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_PATH + "/" + path, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      },
      params: {
        ...params
      }
    })
    .then(result => {
      setData(result.data)
    })
    .catch(error => console.error(error))
  }, [callerArgs])
};

export const wakeApi = () => {
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_PATH + "api/gallery/categories", {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    })
    .catch(error => console.error(error))
  }, [])
}