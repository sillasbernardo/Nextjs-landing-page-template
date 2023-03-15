/* --- @Imports --- */
const express = require('express');

const categoriesController = require('../Controllers/CategoriesController');
const categoryImages = require('../Controllers/CategoryImages');

/* --- @code --- */
const router = express.Router();

// Get all categories
router.get('/categories', categoriesController);

// Get images for specific category
// To get all images, pass 'all' to ':cid:' in the client side
router.get('/categories/:cid', categoryImages);

module.exports = router;