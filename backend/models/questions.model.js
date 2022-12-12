import { DataTypes } from "sequelize";
import db from "../db/db.js";
import Competences from "./competences.model.js";
import Evaluations from "./evaluations.model.js";

const questoes = db.define(
  "questions",
  {
    questionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    importance_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    domain_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    uniqueKeys: {
      Items_unique: { fields: ["evaluationId", "competenceId"] },
    },
  },
  { underscored: true }
);

questoes.belongsTo(Competences, {
  foreignKey: "competenceId",
  allowNull: false,
});
questoes.belongsTo(Evaluations, {
  foreignKey: "evaluationId",
  allowNull: false,
});

export default questoes;
