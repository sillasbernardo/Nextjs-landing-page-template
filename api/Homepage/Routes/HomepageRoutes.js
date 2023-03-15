/* --- @Imports --- */
const express = require('express');

const logoController = require('../../Shared/Controllers/LogoController');
const calltoactionController = require('../../Shared/Controllers/CalltoactionController');
const presentationController = require('../../Homepage/Controllers/PresentationController');
const reviewsController = require('../../Homepage/Controllers/ReviewController');
const aboutController = require('../../Homepage/Controllers/AboutController');
const awardsController = require('../../Homepage/Controllers/AwardsController');
const servicesController = require('../../Homepage/Controllers/ServicesController');
const partnersController = require('../../Homepage/Controllers/PartnersController');

/* --- @code --- */
const router = express.Router();

// logo endpoint
router.get('/logo', logoController);

// calltoaction endpoint
router.get('/calltoaction', calltoactionController);

// presentation endpoint
router.get('/presentation', presentationController);

// reviews endpoint
router.get('/reviews', reviewsController);

// about endpoint
router.get('/about', aboutController);

// awards endpoint
router.get('/awards', awardsController);

// Services endpoint
router.get('/services', servicesController);

// Partners endpoint
router.get('/partners', partnersController);

// Contact endpoint
router.get('/contact', async (req, res, next) => {
  try {
    const contactData = await readJsonFile('contact');
    res.json({ contactData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});


/* --- @exports --- */
module.exports = router;