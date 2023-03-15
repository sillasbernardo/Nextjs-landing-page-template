/* --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');

const ApiError = require('../../Shared/Handlers/ApiError');

/* 
	--- @code ---

	@desc: Get review images from cloudinary
*/

const getReviews = async (req, res, next) => {
	try {
		let reviewsData = await cloudinaryApi.searchImages('Reviews')
		reviewsData = await cloudinaryApi.transformImages('optimizeImages', reviewsData, 'jpg')
		res.status(200).json({ reviewsData })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getReviews;