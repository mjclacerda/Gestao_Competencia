import QuestionService from "../services/questions.service.js";

async function insertQuestion(req, res, next) {
  try {
    let questao = req.body;
    if (
      !questao.importance_level ||
      !questao.domain_level ||
      !questao.competenceId ||
      !questao.evaluationId
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await QuestionService.insertQuestion(questao));
    logger.info(`POST /questão - ${JSON.stringify(questao)}`);
  } catch (err) {
    next(err);
  }
}

async function getQuestions(req, res, next) {
  try {
    res.send(await QuestionService.getQuestions());
    logger.info("GET /questões");
  } catch (err) {
    next(err);
  }
}

async function getQuestion(req, res, next) {
  try {
    res.send(await QuestionService.getQuestion(req.params.id));
    logger.info("GET /questão/:id");
  } catch (err) {
    next(err);
  }
}

export default {
  insertQuestion,
  getQuestions,
  getQuestion,
};
