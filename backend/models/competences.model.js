import { DataTypes } from "sequelize";
import db from "../db/db.js";
import Typologies from "./typologies.model.js";

const competencias = db.define(
  "competences",
  {
    competenceId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    competence: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { underscored: true }
);

competencias.belongsTo(Typologies, {
  foreignKey: "typologyId",
  allowNull: false,
});

export default competencias;
