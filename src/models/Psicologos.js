const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologos = db.define(
  "Psicologos",
  {
    id_psicologo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
    apresentacao: {
        type: DataTypes.STRING,
      },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
      },
    },
    { tableName: "psicologos" }
  );
  
  module.exports = Psicologos;