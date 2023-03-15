/* --- @imports --- */
const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler');
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getCategories = async (req, res, next) => {
	try {
		// Get subfolders in Categories
		const categoriesFolder = await cloudinaryApi.searchFolders('Gallery/Categories')

		// Extract the folders name
		const categoriesNames = categoriesFolder.folders.map(folder => {
			return folder.name
		})

		// Fetch all services
		const services = await cloudinaryApi.searchImages('Services');

		// Extract the service name
		const categoriesData = services.map(service => {
			if (categoriesNames.includes(service.name.split('_').shift())){
				return service.name.split('_').shift()
			}
		})

		categoriesData.unshift('Todos')

		res.status(200).json({ categoriesData })
	} catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
	}
}

/* --- @exports --- */
module.exports = getCategories;