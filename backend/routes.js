/* --- @Imports --- */
const express = require('express');
const path = require('path');

const auth = require('./Gallery/Controllers/Auth');
const galleryRoutes = require('./Gallery/Routes/GalleryRoutes');

/* --- @Code --- */
const router = express.Router();

// Check if connection is authenticated
router.get('*', auth);

// Provide data to the website's gallery
router.use('/api/gallery', galleryRoutes)

// Redirect users to website
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + './Public/index.html'));
})

/* --- @exports --- */
module.exports = router;