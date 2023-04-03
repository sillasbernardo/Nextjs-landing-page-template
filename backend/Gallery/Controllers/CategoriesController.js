/* --- @imports --- */
const cloudinaryApi = require('../Handlers/CloudinaryApiHandler');
const ApiError = require('../Handlers/ApiError');

/* --- @code --- */
const getCategories = async (req, res, next) => {
	try {
		// Get subfolders in Categories
		const categoriesFolder = await cloudinaryApi.searchFolders('Gallery/Categories')

		// Extract the folders name
		const categoriesNames = categoriesFolder.folders.map(folder => {
			return folder.name
		})

		res.status(200).json({ categoriesNames })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getCategories;