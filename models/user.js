'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    userTelegramId: DataTypes.INTEGER,
    chatTelegramId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    username: DataTypes.STRING,
    group: {
      type: DataTypes.STRING(255),
      isNull: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};