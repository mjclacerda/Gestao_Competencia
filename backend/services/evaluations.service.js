import EvaluationRepository from "../repositories/evaluations.repository.js";
import UserRepository from "../repositories/users.repository.js";
import FormRepository from "../repositories/forms.repository.js";

async function insertEvaluation(evaluation) {
  const avaliado = await UserRepository.getUser(evaluation.userId);
  if (avaliado) {
    if (evaluation.bossId) {
      const avaliador = await UserRepository.getUser(evaluation.bossId);
      if (avaliador) {
        const form = await FormRepository.getForm(evaluation.formId);
        if (form) {
          return await EvaluationRepository.insertEvaluation(evaluation);
        }
        throw new Error(
          "Não foi possível criar essa avaliação pois o formulário informado não existe"
        );
      }
      throw new Error(
        "Não foi possível criar essa avaliação pois o chefe avaliador não está cadastrado"
      );
    }
    if (evaluation.teamId) {
      const avaliador = await UserRepository.getUser(evaluation.teamId);
      if (avaliador) {
        const form = await FormRepository.getForm(evaluation.formId);
        if (form) {
          return await EvaluationRepository.insertEvaluation(evaluation);
        }
        throw new Error(
          "Não foi possível criar essa avaliação pois o formulário informado não existe"
        );
      }
      throw new Error(
        "Não foi possível criar essa avaliação pois o colega avaliador não está cadastrado"
      );
    }
    if (!evaluation.bossId) {
      if (!evaluation.teamId) {
        const form = await FormRepository.getForm(evaluation.formId);
        if (form) {
          return await EvaluationRepository.insertEvaluation(evaluation);
        }
        throw new Error(
          "Não foi possível criar essa avaliação pois o formulário informado não existe"
        );
      }
    }
  }
  throw new Error(
    "Não foi possível criar essa avaliação pois o avaliado não está cadastrado"
  );
}

async function getEvaluations() {
  const evaluations = await EvaluationRepository.getEvaluations();
  if (evaluations[0]) {
    return evaluations;
  }
  throw new Error("Não há evaluations cadastradas");
}

async function getEvalUserYear(evaluation) {
  const evaluations = await EvaluationRepository.getEvalUserYear(evaluation);
  if (evaluations[0]) {
    return evaluations;
  }
  throw new Error(
    "Não há evaluations cadastradas para esse usuário no ano informado"
  );
}

async function getEvalBossYear(evaluation) {
  const evaluations = await EvaluationRepository.getEvalBossYear(evaluation);
  if (evaluations[0]) {
    return evaluations;
  }
  throw new Error(
    "Não há evaluations cadastradas para esse chefe no ano informado"
  );
}

async function getEvalTeamYear(evaluation) {
  const evaluations = await EvaluationRepository.getEvalTeamYear(evaluation);
  if (evaluations[0]) {
    return evaluations;
  }
  throw new Error(
    "Não há evaluations cadastradas para esse colega no ano informado"
  );
}

async function getEvaluation(id) {
  const evaluation = await EvaluationRepository.getEvaluation(id);
  if (evaluation) {
    return evaluation;
  }
  throw new Error("A evaluation procurada não existe");
}

export default {
  insertEvaluation,
  getEvaluations,
  getEvalUserYear,
  getEvalBossYear,
  getEvalTeamYear,
  getEvaluation,
};
