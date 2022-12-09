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
    evaluatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true },
  { uniqueKeys: { Items_unique: { fields: ["year", "formId", "userId"] } } }
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
