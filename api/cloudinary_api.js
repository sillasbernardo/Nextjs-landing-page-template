/* This is a Cloudinary API setup */
/* ****************************** */
/* Check Cloudinary documentation for more informations */
/* https://cloudinary.com/documentation/cloudinary_get_started */

const cloudinary = require('cloudinary').v2;

// temp
require('dotenv').config({ path: '../.env' });

// Authentication
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

<<<<<<< HEAD
const searchImages = async (tagname) => {
  // Fetch images based on key/value pair
  try {
    cloudinary
      .search
      .expression(`resource_type:image AND tags=${tagname}`)
      .execute()
      .then(result => {
        let images = [];

        let resArray = result.resources;
        resArray.map(data => {
          const dataObj = {
            name: data.filename,
            link: data.url,
            category: data.folder.split("/").pop()
          }
          images.push(dataObj);
          return images;
        })
      })
  } catch (error) {
    return new Error(error)
  }
};

exports.searchImages = searchImages;
=======
const searchImages = () => {
  // Fetch images based on key/value pair
  cloudinary.api
    .resources({ type: 'upload', tag: 'Presentation-slides' })
    .then((result) => {
      console.log(result);
    });
};

searchImages();
>>>>>>> 9e31afc34e733c5113e95e7119454d9ddb333d8a
