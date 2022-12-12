import QuestionRepository from "../repositories/questions.repository.js";
import CompetenceRepository from "../repositories/competences.repository.js";
import EvaluationRepository from "../repositories/evaluations.repository.js";

async function insertQuestion(question) {
  const competencia = await CompetenceRepository.getCompetence(
    question.competenceId
  );
  if (competencia.status) {
    const avaliacao = await EvaluationRepository.getEvaluation(
      question.evaluationId
    );
    if (avaliacao) {
      return await QuestionRepository.insertQuestion(question);
    }
    throw new Error(
      "Não foi possível criar essa questão pois a avaliação informada não existe"
    );
  }
  throw new Error(
    "Não foi possível criar essa questão pois a competência informada não existe ou está inativa"
  );
}

async function getQuestions() {
  const questions = await QuestionRepository.getQuestions();
  if (questions) {
    return questions;
  }
  throw new Error("Não há questions cadastradas");
}

async function getQuestion(id) {
  const question = await QuestionRepository.getQuestion(id);
  if (question) {
    return question;
  }
  throw new Error("A question procurada não existe");
}

async function getQuestionsUser(userId) {
  const questionuser = await QuestionRepository.getQuestionsUser(userId);
  if (questionuser[0]) {
    return questionuser;
  }
  throw new Error("Não há questões registradas para esse usuário");
}

async function getQuestionsUserYear(user) {
  const questionuser = await QuestionRepository.getQuestionsUserYear(user);
  if (questionuser[0]) {
    return questionuser;
  }
  throw new Error(
    "Não há questões registradas para esse usuário no ano informado"
  );
}

export default {
  insertQuestion,
  getQuestionsUser,
  getQuestionsUserYear,
  getQuestions,
  getQuestion,
};
