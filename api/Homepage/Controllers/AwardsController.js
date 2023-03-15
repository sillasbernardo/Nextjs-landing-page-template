/* --- @imports --- */
const jsonHandler = require('../../Shared/Handlers/JsonHandler');
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getAwards = async (req, res, next) => {
	try {
		const awardsData = await jsonHandler('awards')
		res.json({ awardsData })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getAwards;