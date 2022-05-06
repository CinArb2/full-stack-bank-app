const express = require('express');

const {
  signUpUser,
  loginUser,
  getAllUsers,
  getUserTransfers,
  getUserById
} = require('../controllers/users.controllers')

const { accountExists } = require('../middlewares/users.middlewares')

const router = express.Router()


router.get('/', getAllUsers)
router.get('/:id', accountExists, getUserById)
router.get('/:id/history', accountExists, getUserTransfers)
router.post('/signup', signUpUser)
router.post('/login', loginUser)

module.exports = {usersRouter: router}