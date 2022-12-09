import Question from "../models/questions.model.js";

async function insertQuestion(ask) {
  try {
    return await Question.create(ask);
  } catch (err) {
    throw err;
  }
}

async function getQuestions() {
  try {
    return await Question.findAll();
  } catch (err) {
    throw err;
  }
}

async function getQuestion(id) {
  try {
    return await Question.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertQuestion,
  getQuestions,
  getQuestion,
};
