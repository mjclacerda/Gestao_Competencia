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
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    close: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    uniqueKeys: {
      Items_unique: { fields: ["year"] },
    },
  },
  { underscored: true }
);

export default anos;
