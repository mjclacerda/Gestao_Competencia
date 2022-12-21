import { DataTypes } from "sequelize";
import db from "../db/db.js";

const anos = db.define(
  "years",
  {
    yearId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    open: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    close: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default anos;
