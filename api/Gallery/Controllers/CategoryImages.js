/* --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getCategoryImages = async (req, res, next) => {
	try {
		const categoryId = req.params.cid;

		// Get image for watermark
		let watermark = await cloudinaryApi.searchImages('Logo');

		// Fetch all images in the gallery
		let imagesData = await cloudinaryApi.searchImages('Gallery');
		imagesData = await cloudinaryApi.transformImages('optimizeImages', imagesData, 'jpg');

		// Filter images based on categoryId
		if (categoryId.toLowerCase() !== 'todos'){
			imagesData = imagesData.filter(image => image.category.toLowerCase() === categoryId.toLowerCase())
		}

		res.status(200).json({ imagesData })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getCategoryImages;