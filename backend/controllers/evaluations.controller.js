import EvaluationService from "../services/evaluations.service.js";

async function insertEvaluation(req, res, next) {
  try {
    let avaliacao = req.body;
    if (
      !avaliacao.evaluatorId ||
      !avaliacao.userId ||
      !avaliacao.year ||
      !avaliacao.formId
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await EvaluationService.insertEvaluation(avaliacao));
    logger.info(`POST /avaliacao - ${JSON.stringify(avaliacao)}`);
  } catch (err) {
    next(err);
  }
}

async function getEvaluations(req, res, next) {
  try {
    res.send(await EvaluationService.getEvaluations());
    logger.info("GET /avaliacoes");
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
