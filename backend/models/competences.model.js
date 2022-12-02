import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Typologies from "./typologies.model.js";

const competencias = db.define(
  "competences",
  {
    competenceId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    competence: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
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
