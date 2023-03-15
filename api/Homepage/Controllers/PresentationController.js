/* --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');

const ApiError = require('../../Shared/Handlers/ApiError');

/* 
	--- @code ---

	@desc: Get presentation images from cloudinary
*/

const getPresentation = async (req, res, next) => {
  try {
    let presentationData = await cloudinaryApi.searchImages('Presentation');
		presentationData = await cloudinaryApi.transformImages('cropImages', presentationData, 768, 1270, 'fill')
    res.json({ presentationData });
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Something went wrong'));
  }
}

/* --- @exports --- */
module.exports = getPresentation;