/* --- @Imports --- */
const express = require('express');
const path = require('path');

const auth = require('./Shared/Controllers/Auth');
const homepageRoutes = require('./Homepage/Routes/HomepageRoutes');
const galleryRoutes = require('./Gallery/Routes/GalleryRoutes');

/* --- @Code --- */
const router = express.Router();

// Check if connection is authenticated
router.get('*', auth);

// Provide data to the website's homepage
router.use('/api/homepage', homepageRoutes)

// Provide data to the website's gallery
router.use('/api/gallery', galleryRoutes)

// Content management dashboard


// Redirect users to website
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../dist/index.html'));
})


/* --- @exports --- */
module.exports = router;