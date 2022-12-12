import Evaluation from "../models/evaluations.model.js";

async function insertEvaluation(evaluation) {
  try {
    return await Evaluation.create(evaluation);
  } catch (err) {
    throw new Error(
      "Não foi possível criar esse formulário para este usuário pois ele já foi preenchido"
    );
  }
}

async function getEvaluations() {
  try {
    return await Evaluation.findAll();
  } catch (err) {
    throw err;
  }
}

async function getEvaluation(id) {
  try {
    return await Evaluation.findByPk(id, { raw: true });
  } catch (err) {
    throw err;
  }
}

export default {
  insertEvaluation,
  getEvaluations,
  getEvaluation,
};
