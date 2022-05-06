const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')

const TRANSFER = db.define('transfer', {
  id: {
    autoIncrement: true, //managed by postgres
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


module.exports = { TRANSFER }