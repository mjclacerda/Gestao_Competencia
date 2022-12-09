import { DataTypes } from "sequelize";
import db from "../db/db.js";

const formularios = db.define(
  "forms",
  {
    formId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default formularios;
