const router = require('express').Router();
const toursRoute = require('./tours/tours.router');
const userRouter = require('./users/users.router');

router.use('/api/v1/tours', toursRoute);
router.use('/api/v1/users', userRouter);

module.exports = router;
