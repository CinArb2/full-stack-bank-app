const express = require('express');

const {transferValidations} = require('../middlewares/transfers.middlewares')

const { getAllTransfers,
  makeTransfer
  // createNewUser,
  // getUserByID,
  // updateUser,
  // deleteUser
} = require('../controllers/transfers.controllers')

const router = express.Router()

router.route('/')
  .get(getAllTransfers)
  .post(transferValidations, makeTransfer)

module.exports = {transferRouter: router}