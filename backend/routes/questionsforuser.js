import express from "express";
import QuestionController from "../controllers/questions.controller.js";

const router = express.Router();

router.get("/:id", QuestionController.getQuestionsUser);
router.get("/", QuestionController.getQuestionsUserYear);

export default router;
