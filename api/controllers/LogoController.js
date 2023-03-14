/* Get logo image */
const cloudinaryApi = require('../cloudinary_api');

const getLogo = async (req, res, next) => {
	try {
    const logoData = await cloudinaryApi.searchImages('Logo');
    res.json({ logoData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
}

exports.getLogo = getLogo;