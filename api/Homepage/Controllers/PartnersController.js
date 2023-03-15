/*  --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const jsonHandler = require('../../Shared/Handlers/JsonHandler');
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getPartners = async (req, res, next) => {
  try {
    // Fetch images from cloudinary
    let partnersImages = await cloudinaryApi.searchImages('Partners');
    // Make all images 500x500px
    partnersImages = await cloudinaryApi.transformImages(
      'cropImages',
      partnersImages,
      500,
      500,
      'fill'
    );
    // Optimize images to load faster
    partnersImages = await cloudinaryApi.transformImages(
      'optimizeImages',
      partnersImages,
      'jpg'
    );

    // Store partners logo and a contacting link
    let partnersData = [];

		// Get partners objects from data.json
    const partnersContact = await jsonHandler('partners');
    // Map through object keys
    Object.keys(partnersContact).map(nameTag => {
      // Map through each image to compare image filename to object key
      partnersImages.map(image => {
        // Remove characters after '_' in filename
        const imageFilename = image.name.split('_').shift()
        // Return contact link only if image filename and object key matches
        if (imageFilename === nameTag){
          partnersData.push({
            partnerLogo: image.link,
            partnerContactLink: partnersContact[nameTag]
          })       
        }
      })
    })

    res.status(200).json({ partnersData });
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Something went wrong'));
  }
};

/* --- @exports --- */
module.exports = getPartners;
