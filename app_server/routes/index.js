const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/location');
const ctrlOthers = require('../controllers/others');

/* GET Locations List  page. */
router.get('/', ctrlLocations.locationsList);

/* Get about page. */
router.get('/about', ctrlOthers.aboutUs);

module.exports = router;
