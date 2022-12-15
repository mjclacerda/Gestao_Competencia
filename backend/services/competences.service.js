import CompetenceRepository from "../repositories/competences.repository.js";
import TypologyRepository from "../repositories/typologies.repository.js";

async function insertCompetence(competence) {
  const typology = await TypologyRepository.getTypology(competence.typologyId);
  if (typology) {
    if (typology.status) {
      return await CompetenceRepository.insertCompetence(competence);
    }
    throw new Error(
      "Não foi possível criar essa competencia, pois a tipologia associada está inativa"
    );
  }
  throw new Error(
    "Não foi possível criar essa competencia, pois a tipologia associada não existe"
  );
}

async function getCompetencesHistory() {
  const competencias = await CompetenceRepository.getCompetencesHistory();
  if (competencias) {
    return competencias;
  }
  throw new Error("Não há histórico de competências cadastradas");
}

async function getCompetences() {
  const competencias = await CompetenceRepository.getCompetences();
  if (competencias) {
    return competencias;
  }
  throw new Error("Não há competencias ativas cadastradas");
}

async function getCompetenceByName(competencename) {
  const competencia = await CompetenceRepository.getCompetenceByName(
    competencename
  );
  if (competencia[0]) {
    return competencia;
  }
  throw new Error("Não há competencias ativas cadastradas com esse nome");
}

async function getCompetence(id) {
  const competencia = await CompetenceRepository.getCompetence(id);
  if (competencia) {
    return competencia;
  }
  throw new Error("A competencia procurada não existe ou não está ativa");
}

async function getCompForTypology(typologyId) {
  const competencia = await CompetenceRepository.getCompetencesTyp(typologyId);
  if (competencia[0]) {
    return competencia;
  }
  throw new Error("A tipologia procurada não existe ou não está ativa");
}

async function inativateCompetence(competence) {
  const competencia = await CompetenceRepository.getCompetence(
    competence.competenceId
  );
  if (competencia) {
    return await CompetenceRepository.inativateCompetence(competence);
  }
  throw new Error("Essa competência não existe ou está inativa.");
}

async function updateCompetence(competence) {
  const competencia = await CompetenceRepository.getCompetence(
    competence.competenceId
  );
  if (competencia) {
    const typology = await TypologyRepository.getTypology(
      competence.typologyId
    );
    if (typology.status) {
      return await CompetenceRepository.updateCompetence(competence);
    }
    throw new Error("A tipologia informada não existe ou está inativa");
  }
  throw new Error("A competencia procurada não existe ou não está ativa");
}

export default {
  insertCompetence,
  getCompetencesHistory,
  getCompetences,
  getCompetence,
  getCompetenceByName,
  getCompForTypology,
  inativateCompetence,
  updateCompetence,
};
