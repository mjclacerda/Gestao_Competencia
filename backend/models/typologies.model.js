import Sequelize from "sequelize";
import db from "../repositories/db.js";

const tipologias = db.define(
  "typologies",
  {
    typologyId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    typology: {
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

export default tipologias;
