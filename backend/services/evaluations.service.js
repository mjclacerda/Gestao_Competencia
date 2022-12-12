import EvaluationRepository from "../repositories/evaluations.repository.js";
import UserRepository from "../repositories/users.repository.js";
import FormRepository from "../repositories/forms.repository.js";

async function insertEvaluation(evaluation) {
  const avaliado = await UserRepository.getUser(evaluation.userId);
  if (avaliado) {
    const avaliador = await UserRepository.getUser(evaluation.evaluatorId);
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
      "Não foi possível criar essa avaliação pois o avaliador não está cadastrado"
    );
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
  getEvaluation,
};
