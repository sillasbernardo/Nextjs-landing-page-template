/* This is a Cloudinary API setup */
/* ****************************** */
/* Check Cloudinary documentation for more informations */
/* https://cloudinary.com/documentation/cloudinary_get_started */

const cloudinary = require('cloudinary').v2;

// temp
const dotenv = require('dotenv').config({ path: '../.env' });

// Authentication
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true
})

const searchImages = () => {
	cloudinary.search
		.expression('Presentation')
		.sort_by('public_id', 'desc')
		.execute()
		.then(result => {
			console.log(result)
		})
}

searchImages()
