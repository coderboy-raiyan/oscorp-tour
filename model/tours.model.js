const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name must have name'],
  },
  ratings: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have price'],
  },
});

module.exports = mongoose.model('Tour', tourSchema);
