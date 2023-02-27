const express = require('express');
const path = require('path');
const fs = require('fs');

const { readJsonFile } = require('./readJsonFile');
const { loadGoogleDriveData } = require('./googleDriveApi');
const mammoth = require('mammoth');
const axios = require('axios');

const router = express.Router();

/* Authorization */
router.get('*', (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === process.env.REACT_APP_API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// logo endpoint
router.get('/api/logo', async (req, res, next) => {
  try {
    const logoData = await loadGoogleDriveData('logo');
    res.json({ logoData });
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// calltoaction endpoint
router.get('/api/calltoaction', async (req, res, next) => {
  try {
    const calltoactionData = await readJsonFile('calltoaction');
    res.json({ calltoactionData });
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// presentation endpoint
router.get('/api/presentation', async (req, res, next) => {
  try {
    const presentationData = await loadGoogleDriveData('presentation');
    res.json({ presentationData });
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// reviews endpoint
router.get('/api/reviews', async (req, res, next) => {
  try {
    const reviewsData = await loadGoogleDriveData('reviews');
    res.json({ reviewsData });
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// about endpoint
router.get('/api/about', async (req, res, next) => {
	let aboutData;

  try {
    const aboutRawData = await loadGoogleDriveData('about');
    aboutRawData.map((response) => {
      if (response.name === 'description.docx') {
        // Download file from drive
        axios({
          method: 'get',
          url: response.link,
          responseType: 'stream',
        })
          .then((axiosResponse) => {
            axiosResponse.data.pipe(
              fs.createWriteStream('./data/document.docx')
            );
          })
          .catch((error) => {
            res.status(500).send(`Internal server error. Error: ${error}`);
          });
      }
    });

    mammoth.convertToHtml({ path: "./data/document.docx" })
			.then(result => {
				aboutData = {
					document: result.value,
					image: aboutRawData.filter(data => data.name !== "description.docx")
				}
				res.json({ aboutData })
			})
			.catch(error => {
				res.status(500).send(`Internal server error. Error: ${error}`);
			})

  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// awards endpoint
router.get('/api/awards', async (req, res, next) => {
  try {
    const awardsData = await readJsonFile('awards');
    res.json({ awardsData });
  } catch (error) {
    console.error(error);
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
});

// Services endpoint
router.get('/api/services', async (req, res, next) => {
  try {
    let servicesData = await loadGoogleDriveData("services");

    servicesData = servicesData.map(data => {
      return {
        link: data.link,
        name: data.name.replace(".jpg", "")
      }
    })
    res.json({ servicesData })
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
})

// Partners endpoint
router.get('/api/partners', async (req, res, next) => {
  try {
    let partnersData = await loadGoogleDriveData('partners');

    partnersData = partnersData.map(data => {
      return {
        imageLink: data.link,
        partnerLink: data.name.split("@").pop().split(".png").shift()
      }
    })

    res.json({ partnersData })
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
})

// Contact endpoint
router.get('/api/contact', async (req, res, next) => {
  try {
    const contactData = await readJsonFile("contact")
    res.json({ contactData })
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
})

/* ------------- Gallery routes ---------------*/

// Categories section endpoint
router.get('/api/gallery/categories', async (req, res, next) => {
  try {
    const services = await loadGoogleDriveData("services");
    const categoriesData = services.map(service => {
      return service.name.replace(".jpg", "");
    })
    res.json({ categoriesData })
  } catch (error) {
    res.status(500).send(`Internal server error. Error: ${error}`);
  }
})

// Category endpoint
router.get('/api/gallery/categories/:cid', async (req, res, next) => {
  
})

// All images endpoint
router.get('/api/gallery/images', async (req, res, next) => {
  
})

// Handles any requests that don't match the ones above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

module.exports = router;
