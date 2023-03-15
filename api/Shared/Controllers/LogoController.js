/* --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const ApiError = require('../Handlers/ApiError');

/* 
  --- @code ---

  @desc: Get logo image 
*/
const getLogo = async (req, res, next) => {
	try {
    let logoData = await cloudinaryApi.searchImages('Logo')
    logoData = await cloudinaryApi.transformImages('optimizeImages', logoData, 'gif')
    res.status(200).json({ logoData });
  } catch (error) {
    console.error(error)
    return next(ApiError.badRequest(`Something went wrong`))
  }
}

/* --- @exports --- */
module.exports = getLogo;