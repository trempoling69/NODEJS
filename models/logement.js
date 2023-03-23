"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Logement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logement.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomCommune: DataTypes.STRING,
      quartier: DataTypes.STRING,
      type: DataTypes.STRING,
      signataire: DataTypes.STRING,
      surface: DataTypes.INTEGER,
      adresse: DataTypes.STRING,
      loyer: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Logement",
      timestamps: false,
    }
  );
  return Logement;
};
