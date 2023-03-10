/* --- @Imports --- */
const express = require('express');

const logoController = require('../controllers/LogoController');

/* --- @code --- */
const router = express.Router();

// logo endpoint
router.get('/logo', logoController);

// calltoaction endpoint
router.get('/calltoaction', async (req, res, next) => {
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
router.get('/presentation', async (req, res, next) => {
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
router.get('/reviews', async (req, res, next) => {
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
router.get('/about', async (req, res, next) => {
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
router.get('/awards', async (req, res, next) => {
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
router.get('/services', async (req, res, next) => {
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
router.get('/partners', async (req, res, next) => {
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

module.exports = router;