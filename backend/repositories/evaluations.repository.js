import Evaluation from "../models/evaluations.model.js";
import Users from "../models/users.model.js";

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
    return await Evaluation.findAll({ include: { model: Users } });
  } catch (err) {
    throw err;
  }
}

async function getEvalUserYear(evaluation) {
  try {
    return await Evaluation.findAll({
      where: { userId: evaluation.userId, year: String(evaluation.year) },
    });
  } catch (err) {
    throw err;
  }
}

async function getEvalUserYearForm(evaluation) {
  try {
    return await Evaluation.findAll({
      where: {
        userId: evaluation.userId,
        year: String(evaluation.year),
        formId: evaluation.formId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getEvalBossYear(evaluation) {
  try {
    return await Evaluation.findAll({
      where: { bossId: evaluation.bossId, year: String(evaluation.year) },
    });
  } catch (err) {
    throw err;
  }
}

async function getEvalTeamYear(evaluation) {
  try {
    return await Evaluation.findAll({
      where: { teamId: evaluation.teamId, year: String(evaluation.year) },
    });
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

async function updateEvaluation(evaluation) {
  try {
    await Evaluation.update(
      { teamId: evaluation.teamId },
      {
        where: {
          evaluationId: evaluation.evaluationId,
        },
      }
    );
    return await getEvaluation(evaluation.evaluationId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertEvaluation,
  getEvaluations,
  getEvaluation,
  getEvalUserYear,
  getEvalUserYearForm,
  getEvalBossYear,
  getEvalTeamYear,
  updateEvaluation,
};
