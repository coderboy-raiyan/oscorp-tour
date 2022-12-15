const userRouter = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('./users.controller');

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRouter;
