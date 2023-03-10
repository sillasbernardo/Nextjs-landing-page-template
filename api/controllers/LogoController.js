/* Get logo image */
const cloudinaryApi = require('../cloudinary_api');

const getLogo = async (req, res, next) => {
	try {
    let logoData = await cloudinaryApi.searchImages('Logo')
    logoData = await cloudinaryApi.optimizeImages(logoData)
    res.json({ logoData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
}

module.exports = getLogo;