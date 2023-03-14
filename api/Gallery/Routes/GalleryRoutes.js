/* --- @Imports --- */
const express = require('express');

/* --- @code --- */
const router = express.Router();

// Categories section endpoint
router.get('/api/gallery/categories', async (req, res, next) => {
  try {
    const services = await loadGoogleDriveData('services');

    // Remove extension from name
    const categoriesData = services.map((service) => {
      return service.name.replace('.jpg', '');
    });

    // Insert "Todos" in fist position of the array before resolving
    categoriesData.unshift('Todos');
    res.json({ categoriesData });
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// Category endpoint
router.get('/api/gallery/categories/:cid', async (req, res, next) => {});

// All images endpoint
router.get('/api/gallery/images', async (req, res, next) => {
  try {
    // Load all categories existing
    const getAllCategories = await loadSubfolders('categories');

    const images = [];

    await Promise.all(getAllCategories.map(async (category) => {
      try {
        const getImages = await loadGoogleDriveData(category.name);
        images.push(...getImages)        
      } catch (error) {
        res.status(500).json(`Error while fetching images from loadGoogleDriveData.`)
      }
    }))

    if (images){
      let imagesLength = images.length;
      while(--imagesLength > 0){
        const randomNumber = Math.floor(Math.random() * (imagesLength + 1));
        images[randomNumber] = images[imagesLength];
        images[imagesLength] = images[randomNumber];
      }

      res.json({ images })
    }
  } catch (error) {
    res
      .status(500)
      .send(
        `Error while trying to fetch images from endpoint. Error: ${error}`
      );
  }
});

module.exports = router;