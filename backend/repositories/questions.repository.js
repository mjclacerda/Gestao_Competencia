import Question from "../models/questions.model.js";
import Evaluation from "../models/evaluations.model.js";

async function insertQuestion(ask) {
  try {
    return await Question.create(ask);
  } catch (err) {
    throw new Error(
      "Não foi possível responder essa essa questão pois ela já foi respondida"
    );
  }
}

async function getQuestions() {
  try {
    return await Question.findAll({
      include: { model: Evaluation },
    });
  } catch (err) {
    throw err;
  }
}

async function getQuestionsUser(userId) {
  try {
    return await Question.findAll({
      include: { model: Evaluation, where: { userId: userId } },
    });
  } catch (err) {
    throw err;
  }
}

async function getQuestionsUserYear(user) {
  try {
    return await Question.findAll({
      include: {
        model: Evaluation,
        where: { userId: user.userId, year: String(user.year) },
      },
    });
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
  getQuestionsUser,
  getQuestionsUserYear,
  getQuestions,
  getQuestion,
};
