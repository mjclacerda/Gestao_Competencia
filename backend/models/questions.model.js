import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Competences from "./competences.model.js";
import Evaluations from "./evaluations.model.js";

const questoes = db.define(
  "questions",
  {
    questionId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    importance_level: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    domain_level: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
