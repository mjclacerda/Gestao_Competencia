import EvaluationRepository from "../repositories/evaluations.repository.js";

async function insertEvaluation(evaluation) {
  if (evaluation) {
    return await EvaluationRepository.insertEvaluation(evaluation);
  }
  throw new Error("Não foi possível criar essa evaluation");
}

async function getEvaluations() {
  const evaluations = await EvaluationRepository.getEvaluations();
  if (evaluations) {
    return await EvaluationRepository.getEvaluations();
  }
  throw new Error("Não há evaluations cadastradas");
}

async function getEvaluation(id) {
  const evaluation = await EvaluationRepository.getEvaluation(id);
  if (evaluation) {
    return await EvaluationRepository.getEvaluation(id);
  }
  throw new Error("A evaluation procurada não existe");
}

export default {
  insertEvaluation,
  getEvaluations,
  getEvaluation,
};
