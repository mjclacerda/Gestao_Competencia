import EvaluationService from "../services/evaluations.service.js";

async function insertEvaluation(req, res, next) {
  try {
    let avaliacao = req.body;
    if (!avaliacao.userId || !avaliacao.year || !avaliacao.formId) {
      throw new Error("Há campos obrigatórios não preenchidos");
    } else {
      if (avaliacao.formId === 1) {
        if (!avaliacao.bossId) {
          throw new Error("O Id do chefe precisa ser preenchido");
        }
        res.send(await EvaluationService.insertEvaluation(avaliacao));
        logger.info(
          `POST /avaliacao - autoavaliacao - ${JSON.stringify(avaliacao)}`
        );
      }
      if (avaliacao.formId === 2) {
        if (!avaliacao.teamId) {
          throw new Error("O Id do colega precisa ser preenchido");
        }
        res.send(await EvaluationService.insertEvaluation(avaliacao));
        logger.info(
          `POST /avaliacao - avaliacao chefia - ${JSON.stringify(avaliacao)}`
        );
      }
      if (avaliacao.formId === 3) {
        res.send(await EvaluationService.insertEvaluation(avaliacao));
        logger.info(
          `POST /avaliacao - avaliacao team- ${JSON.stringify(avaliacao)}`
        );
      }
    }
  } catch (err) {
    next(err);
  }
}

async function getEvaluations(req, res, next) {
  try {
    let avaliacao = req.body;
    if (!avaliacao.year) {
      res.send(await EvaluationService.getEvaluations());
      logger.info("GET /avaliacoes");
    }
    if (avaliacao.year && avaliacao.userId) {
      if (avaliacao.bossId || avaliacao.teamId) {
        throw new Error(
          "Se você preencheu o userId, não deve preenche nem o bossId, nem o teamId"
        );
      }
      res.send(await EvaluationService.getEvalUserYear(avaliacao));
      logger.info("GET /avaliacoes - userYear");
    }
    if (avaliacao.year && avaliacao.bossId) {
      if (avaliacao.userId || avaliacao.teamId) {
        throw new Error(
          "Se você preencheu o bossId, não deve preenche nem o userId, nem o teamId"
        );
      }
      res.send(await EvaluationService.getEvalBossYear(avaliacao));
      logger.info("GET /avaliacoes - bossYear");
    }
    if (avaliacao.year && avaliacao.teamId) {
      if (avaliacao.bossId || avaliacao.userId) {
        throw new Error(
          "Se você preencheu o teamId, não deve preenche nem o bossId, nem o userId"
        );
      }
      res.send(await EvaluationService.getEvalTeamYear(avaliacao));
      logger.info("GET /avaliacoes - teamYear");
    }
  } catch (err) {
    next(err);
  }
}

async function getEvaluation(req, res, next) {
  try {
    res.send(await EvaluationService.getEvaluation(req.params.id));
    logger.info("GET /avaliacao/:id");
  } catch (err) {
    next(err);
  }
}

export default {
  insertEvaluation,
  getEvaluations,
  getEvaluation,
};
