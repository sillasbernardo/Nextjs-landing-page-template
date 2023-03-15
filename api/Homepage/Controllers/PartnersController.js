/*  --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const jsonHandler = require('../../Shared/Handlers/JsonHandler');
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getPartners = async (req, res, next) => {
  try {
    // Fetch images from cloudinary
    let partnersImages = await cloudinaryApi.searchImages('Partners');
    partnersImages = await cloudinaryApi.transformImages(
      'cropImages',
      partnersImages,
      500,
      500,
      'fill'
    );
    partnersImages = await cloudinaryApi.transformImages(
      'optimizeImages',
      partnersImages,
      'jpg'
    );

			/* 
				The code below needs to return the correct link from obeject in data.json

				check this bug
			*/


		// Get partner's contact link
    const partnersContact = await jsonHandler('partners');

		const contactLink = partnersImages.map(contact => {
			const contactTitle = contact.name.split('_').shift();

			console.log(contactTitle)

			for (const title of Object.keys(partnersContact)){
				if (title === contactTitle){
					return Object.values(title)
				}
			}
		})

		console.log(contactLink);

    // res.status(200).json({ partnersData });
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Something went wrong'));
  }
};

/* --- @exports --- */
module.exports = getPartners;
