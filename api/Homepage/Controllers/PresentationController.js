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
		
    res.json({ presentationData });
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Error while fetching data from database.'));
  }
}

/* --- @exports --- */
module.exports = getPresentation;