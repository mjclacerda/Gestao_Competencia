import QuestionRepository from "../repositories/questions.repository.js";

async function insertQuestion(question) {
  if (question) {
    return await QuestionRepository.insertQuestion(question);
  }
  throw new Error("Não foi possível criar essa question");
}

async function getQuestions() {
  const questions = await QuestionRepository.getQuestions();
  if (questions) {
    return await QuestionRepository.getQuestions();
  }
  throw new Error("Não há questions cadastradas");
}

async function getQuestion(id) {
  const question = await QuestionRepository.getQuestion(id);
  if (question) {
    return await QuestionRepository.getQuestion(id);
  }
  throw new Error("A question procurada não existe");
}

export default {
  insertQuestion,
  getQuestions,
  getQuestion,
};
