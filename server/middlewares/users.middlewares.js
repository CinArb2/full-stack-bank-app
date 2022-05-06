// Models
const { User } = require('../models/user.model');

const accountExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        error: 'Error',
        message: 'User does not exist'
        });
    }
    // Add user data to the req object
    req.user = user;
    next();

  } catch (error) {
    console.log(error);
  }
};

module.exports = { accountExists };