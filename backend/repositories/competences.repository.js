import Competence from "../models/competences.model.js";
import Typology from "../models/typologies.model.js";

async function insertCompetence(competence) {
  try {
    return await Competence.create(competence);
  } catch (err) {
    throw err;
  }
}

async function getCompetencesHistory() {
  try {
    return await Competence.findAll({
      include: { model: Typology },
      order: ["competence"],
    });
  } catch (err) {
    throw err;
  }
}

async function getCompetences() {
  try {
    return await Competence.findAll({
      where: { status: true },
      order: ["competence"],
    });
  } catch (err) {
    throw err;
  }
}

async function getCompetenceByName(competencename) {
  try {
    return await Competence.findAll({
      where: { competence: competencename, status: true },
    });
  } catch (err) {
    throw err;
  }
}

async function getCompetencesTyp(typologyId) {
  try {
    return await Competence.findAll({
      where: { typologyId: typologyId, status: true },
      order: ["competence"],
    });
  } catch (err) {
    throw err;
  }
}

async function getCompetence(id) {
  try {
    return await Competence.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function inativateCompetence(competence) {
  try {
    await Competence.update(
      {
        status: false,
      },
      {
        where: {
          competenceId: competence.competenceId,
        },
      }
    );
    return await getCompetence(competence.competenceId);
  } catch (err) {
    throw err;
  }
}

async function updateCompetence(competence) {
  try {
    await Competence.update(
      {
        competence: competence.competence,
        description: competence.description,
        typologyId: competence.typologyId,
      },
      {
        where: {
          competenceId: competence.competenceId,
        },
      }
    );
    return await getCompetence(competence.competenceId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertCompetence,
  getCompetences,
  getCompetencesHistory,
  getCompetencesTyp,
  getCompetence,
  getCompetenceByName,
  inativateCompetence,
  updateCompetence,
};
