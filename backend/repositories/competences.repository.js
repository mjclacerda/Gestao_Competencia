import Competence from "../models/competences.model.js";

async function insertCompetence(competence) {
  try {
    return await Competence.create(competence);
  } catch (err) {
    throw err;
  }
}

async function getCompetences() {
  try {
    return await Competence.findAll();
  } catch (err) {
    throw err;
  }
}

async function getCompetencesTyp(typology) {
  try {
    return (
      await Competence.findAll(typology),
      { where: { typologyId: typology.typologyId } }
    );
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

async function inativateCompetence(id) {
  try {
    return await Competence.update(
      id,
      { status: false },
      {
        where: {
          typologyId: id,
        },
      }
    );
  } catch (err) {
    throw err;
  }
}

async function updateCompetence(competence) {
  try {
    return await Competence.update(competence, {
      where: {
        typologyId: competence.typologyId,
      },
    });
    return await getCompetence(competence.typologyId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertCompetence,
  getCompetences,
  getCompetencesTyp,
  getCompetence,
  inativateCompetence,
  updateCompetence,
};
