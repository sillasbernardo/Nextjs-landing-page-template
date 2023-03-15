/* --- @imports --- */
const fs = require('fs');
const mammoth = require('mammoth');

const cloudinaryApi = require('../../Shared/Handlers/CloudinaryApiHandler')
const ApiError = require('../../Shared/Handlers/ApiError');

/* --- @code --- */
const getAbout = async (req, res, next) => {
	try {
		// Fetch image from cloudinary
		let aboutImage = await cloudinaryApi.searchImages('About');
		aboutImage = await cloudinaryApi.transformImages('optimizeImages', aboutImage, 'webp');
		
    // Converts docx file to json
		const documentText = await mammoth.convertToHtml({ path: './Database/document.docx' });
		
		const aboutData = {
			document: documentText.value,
			image: aboutImage[0].link
		}

		res.status(200).json({ aboutData })
  } catch (error) {
		console.error(error);
		return next(ApiError.internal('Something went wrong'))
  }
}

/* --- @exports --- */
module.exports = getAbout;