import express from "express";
import EvaluationController from "../controllers/evaluations.controller.js";

const router = express.Router();

router.post("/", EvaluationController.insertEvaluation);
router.get("/", EvaluationController.getEvaluations);
router.get("/:id", EvaluationController.getEvaluation);

export default router;
