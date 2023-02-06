import { DataTypes } from "sequelize";
import db from "../db/db.js";
import Permissions from "./permissions.model.js";

const usuarios = db.define(
  "users",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);
usuarios.belongsTo(Permissions, {
  foreignKey: "permissionId",
  allowNull: false,
});

export default usuarios;
