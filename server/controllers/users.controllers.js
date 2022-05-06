const { User } = require('../models/user.model')
const { TRANSFER } = require('../models/transfer.model')


const getAllUsers = async (req, res) => {
  
  const users = await User.findAll();

  res.status(200).json({
    users
  });

}

const getUserTransfers = async (req, res) => {
  
  const { user } = req

  const transfers = await TRANSFER.findAll({ where: { senderUserId: user.id } });

  res.status(200).json({
    transfers,
  });
}

const getUserById = async (req, res) => {
  
  const { user } = req

  res.status(200).json({
    user,
  });
}

const signUpUser = async (req, res) => {
  try {
    //SELECT * from users
    const { name, password } = req.body

    if (name.length === 0) {
      return res.status(404).json({
        error: 'Error',
        message: 'Name cannot be empty'
       });
    }

    if (password.length < 3) {
      return res.status(404).json({
        error: 'Error',
        message: 'Password must be at least 8 characters long'
       });
    }
    
    const accountNumber = Math.floor(Math.random()*1000000)

    const newUser = await User.create(
    {
      name,
      password,
      accountNumber
    })

    res.status(201).json({ newUser });

  } catch (error) {
    console.log(error);
  }
}

//como hago la autenticacion? genero token?
const loginUser = async (req, res) => {
  try {
    //SELECT * from users
    const { accountNumber, password } = req.body
    
    const accountLogin = await User.findOne({ where: { accountNumber, password } })

    if (!accountLogin) {
      return res.status(404).json({
        status: 'error',
        message: 'please validate your credentials',
      });
    }

    res.status(200).json({
      accountLogin,
    });

  } catch (error) {
    console.log(error);
  }
}

// piden :id:history pero debo tener al usuario auten

module.exports = {
  getAllUsers,
  signUpUser,
  loginUser,
  getUserTransfers,
  getUserById
};