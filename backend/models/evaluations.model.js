import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Forms from "./forms.model.js";
import Users from "./users.model.js";

const avaliacoes = db.define(
  "evaluations",
  {
    evaluationId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    evaluatorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.STRING,
      allowNull: false,
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
