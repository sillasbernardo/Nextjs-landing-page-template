/* This is a Cloudinary API setup */
/* ****************************** */
/* Check Cloudinary documentation for more informations */
/* https://cloudinary.com/documentation/cloudinary_get_started */
const cloudinary = require('cloudinary').v2;

const ApiError = require('./ApiError');

// Authentication
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/*
	--- @code ---

	@desc: This function searches for images on cloudinary
          and fetch them based on tagname
*/
const searchImages = async (tagname) => {
  try {
    // Error handling
    if (!tagname) {
      throw ApiError.notFound('Missing properties');
    }

    const result = await cloudinary.search
      .expression(`resource_type:image AND tags=${tagname}`)
			.max_results(500)
      .execute();

    const images = result.resources.map((resource) => ({
      name: resource.filename,
      publicId: resource.public_id,
      link: resource.url,
      category: resource.folder.split('/').pop(),
    }));

    return images;
  } catch (error) {
    console.error(error);
    throw ApiError.internal('Something went wrong');
  }
};

/* 
	@desc: This function searches for subfolders in a speficic folder
*/
const searchFolders = async (folderName) => {
	try {
		const folders = await cloudinary.api.sub_folders(folderName, { type: 'upload' })
			.then(result => result)
			.catch(error => console.error(error))
		
		return folders;
	} catch (error) {
		console.error(error);
		throw ApiError.internal('Something went wrong')
	}
}


/*
	@desc: This function transforms images and return the specified type
					of transformation.

					type: The type of transformation
					...options: Set of properties to be extracted and used to
											tranform images
*/
const transformImages = async (type, ...options) => {
  try {
    // Holds a set of properties based on type
    let cloudinaryUrlOptions;

		// Handles missing properties in '...options'
		if (Object.keys(options).length === 0){
			throw ApiError.notFound('Missing properties');
		}

		// Define properties to be extracted
		let images, crop, format, width, height, overlayPublicId;

		// Define which properties are set based on type
    switch (type) {
      case 'resizeImages':
        [ images, width, crop ] = options;
        cloudinaryUrlOptions = { width, crop };
				break;

      case 'optimizeImages':
				[ images, format ] = options;
				cloudinaryUrlOptions = {
					format,
					flags: 'lossy',
					quality: 'auto:good'
				}
				break;

      case 'cropImages':
				[ images, height, width, crop ] = options;				
				cloudinaryUrlOptions = { height, width, crop }
				break;

			case 'addWatermark':
				[ images, width, crop, overlayPublicId ] = options;
				cloudinaryUrlOptions = {
					transformation: [
						{	
							width, 
							crop	
						},
						{
							overlay: overlayPublicId,
							gravity: 'south_east',
							x: 10,
							y: 10,
							opacity: 50
						}
					]
				}
    }

		// Run transformation based on properties in cloudinaryUrlOptions
		const transformedImages = images.map((image) => {
			const url = cloudinary.url(image.publicId, cloudinaryUrlOptions);

			return {
				...image,
				link: url
			}
		})

		// Return an array of transformed images
		return transformedImages;
  } catch (error) {
		console.error(error)
		throw ApiError.internal('Something went wrong');
	}
};

/* --- @exports --- */
exports.searchImages = searchImages;
exports.transformImages = transformImages;
exports.searchFolders = searchFolders;
