import CompetenceRepository from "../repositories/competences.repository.js";
import TypologyRepository from "../repositories/typologies.repository.js";

async function insertCompetence(competence) {
  const typology = await TypologyRepository.getTypology(competence.typologyId);
  if (typology) {
    return await CompetenceRepository.insertCompetence(competence);
  }
  throw new Error(
    "Não foi possível criar essa competencia, pois a tipologia associada não existe"
  );
}

async function getCompetences() {
  const competencias = await CompetenceRepository.getCompetences();
  if (competencias) {
    return await CompetenceRepository.getCompetences();
  }
  throw new Error("Não há competencias ativas cadastradas");
}

async function getCompetence(id) {
  const competencia = await CompetenceRepository.getCompetence(id);
  if (competencia) {
    return await CompetenceRepository.getCompetence(id);
  }
  throw new Error("A competencia procurada não existe ou não está ativa");
}

async function inativateCompetence(id) {
  const competencia = await CompetenceRepository.getCompetence(id);
  if (competencia) {
    return await CompetenceRepository.inativateCompetence(id);
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
    if (typology) {
      return CompetenceRepository.updateCompetence(competence);
    }
    throw new Error("A tipologia informada não existe");
  }
  throw new Error("A competencia procurada não existe ou não está ativa");
}

export default {
  insertCompetence,
  getCompetences,
  getCompetence,
  inativateCompetence,
  updateCompetence,
};
