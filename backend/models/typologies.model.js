import { DataTypes } from "sequelize";
import db from "../db/db.js";

const tipologias = db.define(
  "typologies",
  {
    typologyId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    typology: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default tipologias;
