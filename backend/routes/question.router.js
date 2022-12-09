import express from "express";
import QuestionController from "../controllers/questions.controller.js";

const router = express.Router();

router.post("/", QuestionController.insertQuestion);
router.get("/", QuestionController.getQuestions);
router.get("/:id", QuestionController.getQuestion);

export default router;
