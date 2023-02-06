import express from "express";
import EvaluationController from "../controllers/evaluations.controller.js";

const router = express.Router();

router.post("/", EvaluationController.insertEvaluation);
router.get("/", EvaluationController.getEvaluations);
router.get("/:id", EvaluationController.getEvaluation);
router.put("/", EvaluationController.updateEvaluation);

export default router;
