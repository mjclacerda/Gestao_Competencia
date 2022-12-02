import Sequelize from "sequelize";
import db from "../repositories/db.js";

const formularios = db.define(
  "forms",
  {
    formId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default formularios;
