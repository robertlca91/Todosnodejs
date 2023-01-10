const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Categories = db.define(
  'categories',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false, // para que no te cree el createAt updateAt
  }
)
module.exports = Categories
