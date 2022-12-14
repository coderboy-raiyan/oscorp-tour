const toursRoute = require('express').Router();
const {
  getAllTours,
  checkBody,
  createTour,
  checkID,
  getTour,
  updateTour,
  deleteTour,
} = require('./toursController');

toursRoute.param('id', checkID);

toursRoute.route('/').get(getAllTours).post(checkBody, createTour);

toursRoute.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = toursRoute;
