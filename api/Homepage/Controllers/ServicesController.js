/* --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getServices = async (req, res, next) => {
	try {
		let servicesData = await cloudinaryApi.searchImages('Services');
		servicesData = await cloudinaryApi.transformImages('optimizeImages', servicesData, 'jpg');


		servicesData = servicesData.map(data => {
			return {
				imageLink: data.link,
				serviceTitle: data.name.split("_").shift()
			}
		})

		res.status(200).json({ servicesData })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getServices;