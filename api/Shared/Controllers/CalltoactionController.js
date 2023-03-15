/* --- @imports --- */
const jsonHandler = require('../../Shared/Handlers/JsonHandler');
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const ApiError = require('../Handlers/ApiError');

/* 
	--- @code ---

	@desc: Get data for calltoaction component
*/
const getCalltoaction = async (req, res, next) => {
	try {
		// Get instagram icon
		let instagramIcon = await cloudinaryApi.searchImages('Header-Insta-Icon');
		instagramIcon = await cloudinaryApi.transformImages('optimizeImages', instagramIcon, 'png');

		// Get calltoaction data from json file
		let getCalltoactionData = await jsonHandler('calltoaction')

		// Insert instagram icon in the response
		getCalltoactionData = {
			...getCalltoactionData,
			instagram: {
				...getCalltoactionData.instagram,
				icon: instagramIcon[0].link
			}
		}

		res.status(200).json({ getCalltoactionData })
	} catch (error) {
		console.error(error);
		return next(ApiError.badRequest(`Something went wrong.`))
	}
}

/* --- @exports --- */
module.exports = getCalltoaction;