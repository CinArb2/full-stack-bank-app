// Models
const { User } = require('../models/user.model');
const { Op } = require("sequelize");

const transferValidations = async (req, res, next) => {
  try {
    const { recipientAccount, amount, senderAccount } = req.body

    const recipient = await User.findOne({ where: { accountNumber: recipientAccount } });

    const sender = await User.findOne({
      where: {
        accountNumber: senderAccount,
        amount: { [Op.gte]: amount }
      }
    });

    if (!recipient) {
      return res.status(404).json({
        error: 'Error',
        message: 'recipient Account doesnt exist'
        });
    }

    if (!sender) {
      return res.status(404).json({
        error: 'Error',
        message: 'not enough money in your bank'
        });
    }
    // Add user data to the req object
    req.recipient = recipient;
    req.sender = sender;

    next();

  } catch (error) {
    console.log(error);
  }
};

module.exports = { transferValidations };