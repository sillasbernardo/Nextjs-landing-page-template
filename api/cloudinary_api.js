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
