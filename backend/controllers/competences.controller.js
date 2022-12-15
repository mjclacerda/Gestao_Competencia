import CompetenceService from "../services/competences.service.js";

async function insertCompetence(req, res, next) {
  try {
    let competencia = req.body;
    if (
      !competencia.competence ||
      !competencia.description ||
      !competencia.typologyId ||
      !competencia.status
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await CompetenceService.insertCompetence(competencia));
    logger.info(`POST /competencia - ${JSON.stringify(competencia)}`);
  } catch (err) {
    next(err);
  }
}

async function getCompetencesHistory(req, res, next) {
  try {
    res.send(await CompetenceService.getCompetencesHistory());
    logger.info("GET /histórico de competencias");
  } catch (err) {
    next(err);
  }
}

async function getCompetences(req, res, next) {
  try {
    let competence = req.body;
    if (competence.competence) {
      try {
        res.send(
          await CompetenceService.getCompetenceByName(competence.competence)
        );
        logger.info("GET /competencia pelo nome");
      } catch (err) {
        next(err);
      }
    }
    res.send(await CompetenceService.getCompetences());
    logger.info("GET /competencias");
  } catch (err) {
    next(err);
  }
}

async function getCompetence(req, res, next) {
  try {
    res.send(await CompetenceService.getCompetence(req.params.id));
    logger.info("GET /competencia/:id");
  } catch (err) {
    next(err);
  }
}

async function getCompForTypology(req, res, next) {
  try {
    res.send(await CompetenceService.getCompForTypology(req.params.id));
    logger.info("GET /competencias por tipologia/:id");
  } catch (err) {
    next(err);
  }
}

async function inativateCompetence(req, res, next) {
  try {
    let competencia = req.body;
    if (
      !competencia.competenceId ||
      !competencia.competence ||
      !competencia.description ||
      !competencia.typologyId ||
      !competencia.status
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await CompetenceService.inativateCompetence(competencia));
    logger.info("PUT /competencia(inativate)");
  } catch (err) {
    next(err);
  }
}

async function updateCompetence(req, res, next) {
  try {
    let competencia = req.body;
    if (
      !competencia.competenceId ||
      !competencia.competence ||
      !competencia.description ||
      !competencia.typologyId ||
      !competencia.status
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await CompetenceService.updateCompetence(competencia));
    logger.info(`PUT /competencia - ${JSON.stringify(competencia)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  insertCompetence,
  getCompetencesHistory,
  getCompetences,
  getCompetence,
  getCompForTypology,
  inativateCompetence,
  updateCompetence,
};
