const express = require('express');
const path = require('path');
const fs = require('fs');

const { readJsonFile } = require('./readJsonFile');
const { loadGoogleDriveData, loadSubfolders } = require('./googleDriveApi');
const mammoth = require('mammoth');
const axios = require('axios');

// controllers
const auth = require('./controllers/ConnectAuth');
const LogoController = require('./controllers/LogoController');

const router = express.Router();

/* Authorization */
router.get('*', auth.connect_auth);

// logo endpoint
router.get('/api/logo', LogoController.getLogo);

// calltoaction endpoint
router.get('/api/calltoaction', async (req, res, next) => {
  try {
    const calltoactionData = await readJsonFile('calltoaction');
    res.json({ calltoactionData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// presentation endpoint
router.get('/api/presentation', async (req, res, next) => {
  try {
    const presentationData = await loadGoogleDriveData('presentation');
    res.json({ presentationData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// reviews endpoint
router.get('/api/reviews', async (req, res, next) => {
  try {
    const reviewsData = await loadGoogleDriveData('reviews');
    res.json({ reviewsData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// about endpoint
router.get('/api/about', async (req, res, next) => {
  let aboutData;

  try {
    const aboutRawData = await loadGoogleDriveData('about');
    aboutRawData.map((response) => {
      /* Makes sure only the docx file is selected */
      if (response.name === 'description.docx') {
        // Download file from drive
        axios({
          method: 'get',
          url: response.link,
          responseType: 'stream',
        })
          .then((axiosResponse) => {
            // Write file to local folder
            axiosResponse.data.pipe(
              fs.createWriteStream('./data/document.docx')
            );
          })
          .catch((error) => {
            res
              .status(500)
              .send(`Could not download file from server. Error: ${error}`);
          });
      }
    });

    // Converts docx file to json
    mammoth
      .convertToHtml({ path: './data/document.docx' })
      .then((result) => {
        aboutData = {
          document: result.value,
          image: aboutRawData.filter(
            (data) => data.name !== 'description.docx'
          ),
        };
        res.json({ aboutData });
      })
      .catch((error) => {
        res.status(500).send(`Could not convert file to json. Error: ${error}`);
      });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// awards endpoint
router.get('/api/awards', async (req, res, next) => {
  try {
    const awardsData = await readJsonFile('awards');
    res.json({ awardsData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// Services endpoint
router.get('/api/services', async (req, res, next) => {
  try {
    let servicesData = await loadGoogleDriveData('services');

    // Removes extension format from name
    servicesData = servicesData.map((data) => {
      return {
        link: data.link,
        name: data.name.replace('.jpg', ''),
      };
    });
    res.json({ servicesData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// Partners endpoint
router.get('/api/partners', async (req, res, next) => {
  try {
    let partnersData = await loadGoogleDriveData('partners');

    /*  partnersData comes as "partner@www.partner.com"
        The following function extracts the link from it and removes extension ".png";
    */
    partnersData = partnersData.map((data) => {
      return {
        imageLink: data.link,
        partnerLink: data.name.split('@').pop().split('.png').shift(),
      };
    });

    res.json({ partnersData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

// Contact endpoint
router.get('/api/contact', async (req, res, next) => {
  try {
    const contactData = await readJsonFile('contact');
    res.json({ contactData });
  } catch (error) {
    res
      .status(500)
      .send(`Error while fetching data from database. Error: ${error}`);
  }
});

/* ------------- Gallery routes ---------------*/

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

// Handles any requests that don't match the ones above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

module.exports = router;
