const { TRANSFER } = require('../models/transfer.model')

const getAllTransfers = async (req, res) => {
  try {
    //SELECT * from users
    const transfers = await TRANSFER.findAll();

    res.status(200).json({
      transfers
    });

  } catch (error) {
    console.log(error);
  }
}

const makeTransfer = async (req, res) => {
  try {
    //SELECT * from users

    const { recipient, sender } = req

    //fields to update
    const { amount } = req.body

    const newAmountRecipient = recipient.amount*1 + amount*1
    const newAmountSender = sender.amount*1 - amount*1

    await recipient.update({amount: newAmountRecipient})
    await sender.update({amount: newAmountSender})

    //Simple INSERT query
    const newTransfer = await TRANSFER.create(
      {
        amount,
        senderUserId: sender.id,
        receiverUserId: recipient.id
      })

    res.status(200).json({newTransfer});

  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTransfers,
  makeTransfer
};