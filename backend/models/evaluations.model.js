import { DataTypes } from "sequelize";
import db from "../db/db.js";
import Forms from "./forms.model.js";
import Users from "./users.model.js";

const avaliacoes = db.define(
  "evaluations",
  {
    evaluationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    bossId: {
      type: DataTypes.INTEGER,
    },
    teamId: {
      type: DataTypes.INTEGER,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    uniqueKeys: {
      Items_unique: { fields: ["year", "formId", "userId"] },
    },
  },
  { underscored: true }
);

avaliacoes.belongsTo(Forms, {
  foreignKey: "formId",
  allowNull: false,
});
avaliacoes.belongsTo(Users, {
  foreignKey: "userId",
  allowNull: false,
});

export default avaliacoes;
