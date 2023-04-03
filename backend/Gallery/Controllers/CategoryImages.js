/* --- @imports --- */
const cloudinaryApi = require('../Handlers/CloudinaryApiHandler');
const ApiError = require('../Handlers/ApiError');

/* --- @code --- */
const getCategoryImages = async (req, res, next) => {
	try {
		const { imagesLimit, nextCursor, tagName } = req.query;

		// Fetch all images in the gallery
		const imagesData = await cloudinaryApi.searchImages(tagName, imagesLimit, nextCursor);
		let transformedImagesData = await cloudinaryApi.transformImages('optimizeImages', imagesData.images, 'jpg');

		res.status(200).json({ transformedImagesData, nextCursor: imagesData.nextCursor })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getCategoryImages;