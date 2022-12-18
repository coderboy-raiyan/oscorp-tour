/* eslint-disable no-console */
const mongoose = require('mongoose');

async function connectDb() {
  try {
    const connect = await mongoose.connect('mongodb://0.0.0.0:27017/bnbTour');
    console.log(`${connect.connections[0]._connectionString}`.underline.cyan);
  } catch (error) {
    console.log(`${error}`.underline.red);
  }
}

module.exports = connectDb;
