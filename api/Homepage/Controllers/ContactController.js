/* --- @imports --- */
const ApiError = require('../../Shared/Handlers/ApiError');
const jsonHandler = require('../../Shared/Handlers/JsonHandler');
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');

/* --- @code --- */
const getContact = async (req, res, next) => {
  try {
    // Fetch images from cloudinary
    let contactImages = await cloudinaryApi.searchImages('Contact');
    // Optimize images to load faster
    contactImages = await cloudinaryApi.transformImages(
      'optimizeImages',
      contactImages,
      'png'
    );

    // Store contact logo and link
    let contactData = [];

		// Get contact objects from data.json
    const contactLinks = await jsonHandler('contact');
    // Map through object keys
    Object.keys(contactLinks).map(nameTag => {
      // Map through each image to compare image filename to object key
      contactImages.map(image => {
        // Remove characters after '_' in filename
        const imageFilename = image.name.split('_').shift()
        // Return contact link only if image filename and object key matches
        if (imageFilename === nameTag){
          contactData.push({
            contactIcon: image.link,
            contactInfo: contactLinks[nameTag]
          })       
        }
      })
    })

    res.status(200).json({ contactData });
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Something went wrong'));
  }
}

/* --- @exports --- */
module.exports = getContact;