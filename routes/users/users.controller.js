const Tour = require('../../model/tours.model');

async function getAllUsers(req, res) {
  try {
    const tours = await Tour.find({});
  } catch (error) {
    console.log(error);
  }
}
async function createUser(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'Route is not defined yet',
  });
}
async function getUser(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'Route is not defined yet',
  });
}
async function updateUser(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'Route is not defined yet',
  });
}
async function deleteUser(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'Route is not defined yet',
  });
}

module.exports = { getAllUsers, getUser, updateUser, deleteUser, createUser };
