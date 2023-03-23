"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      dateNaissance: DataTypes.STRING,
      numero: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Client",
      timestamps: false,
    }
  );
  return Client;
};
