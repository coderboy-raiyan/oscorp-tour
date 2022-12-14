const router = require('express').Router();
const toursRoute = require('./tours/toursRoutes');

router.use('/api/v1/tours', toursRoute);

module.exports = router;
