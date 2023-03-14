/* This is a Cloudinary API setup */
/* ****************************** */
/* Check Cloudinary documentation for more informations */
/* https://cloudinary.com/documentation/cloudinary_get_started */

const cloudinary = require('cloudinary').v2;

// Authentication
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Fetch images from cloudinary based on tagname
const searchImages = async (tagname) => {
  try {
    // Error handling
    if (!tagname) {
      return new Error("'tagname' is undefined");
    }

    const result = await cloudinary.search
      .expression(`resource_type:image AND tags=${tagname}`)
      .execute();

    const images = result.resources.map((resource) => ({
      name: resource.filename,
      publicId: resource.public_id,
      link: resource.url,
      category: resource.folder.split('/').pop(),
    }));

    return images;
  } catch (error) {
    return new Error(error);
  }
};

// Resize images
const resizeImage = async (images, size) => {
  try {
    // Error handling
    if (!images || !size) {
      return new Error(!images ? 'images is undefined' : 'size is undefined');
    }

    const reducedImages = images.map((image) => {
      const url = cloudinary.url(image.publicId, {
        width: size,
        crop: 'scale',
      });

      return {
        ...image,
        link: url
      }
    });

    return reducedImages;
  } catch (error) {
    return new Error(error);
  }
};

// Optimize images to reduce file size without losing quality
const optimizeImages = async (images) => {
  try {
    if (!images){
      return new Error('images is undefined')
    }

    const optimizedImages = images.map((image) => {
      const url = cloudinary.url(image.publicId, {
        format: 'gif',
        flags: 'lossy',
        quality: 'auto:good'
      })

      return {
        ...images,
        link: url
      }
    })

    return optimizedImages
  } catch (error) {
    return new Error(error);
  }
}

exports.searchImages = searchImages;
exports.resizeImage = resizeImage;
exports.optimizeImages = optimizeImages;
