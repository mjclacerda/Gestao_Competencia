import TypologyRepository from "../repositories/typologies.repository.js";
import CompetenceRepository from "../repositories/competences.repository.js";

async function insertTypology(typology) {
  if (typology) {
    return await TypologyRepository.insertTypology(typology);
  }
  throw new Error("Não foi possível criar essa tipologia");
}

async function getTypologies() {
  const tipologias = await TypologyRepository.getTypologies();
  if (tipologias[0]) {
    return tipologias;
  }
  throw new Error("Não há tipologias ativas cadastradas");
}

async function getTypologyByName(typologyname) {
  const tipologia = await TypologyRepository.getTypologyByName(typologyname);
  if (tipologia[0]) {
    return tipologia;
  }
  throw new Error("Não há tipologias ativas cadastradas com esse nome");
}

async function getTypology(id) {
  const tipologia = await TypologyRepository.getTypology(id);
  if (tipologia) {
    return tipologia;
  }
  throw new Error("A tipologia procurada não existe ou não está ativa");
}

async function inativateTypology(typology) {
  const competencias = await CompetenceRepository.getCompetencesTyp(
    typology.typologyId
  );
  if (competencias[0]) {
    throw new Error(
      "A tipologia em questão possui competências ativas. Para excluir essa tipologia favor exclua primeiro suas competências relacionadas a ela."
    );
  }
  return await TypologyRepository.inativateTypology(typology);
}

async function updateTypology(typology) {
  const tipologia = await TypologyRepository.getTypology(typology.typologyId);
  if (tipologia) {
    return TypologyRepository.updateTypology(typology);
  }
  throw new Error("A tipologia procurada não existe ou não está ativa");
}

export default {
  insertTypology,
  getTypologies,
  getTypology,
  getTypologyByName,
  inativateTypology,
  updateTypology,
};
