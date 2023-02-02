import { DataTypes } from "sequelize";
import db from "../db/db.js";

const permissoes = db.define(
  "permissions",
  {
    permissionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default permissoes;
