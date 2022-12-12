import express from "express";
import CompetenceController from "../controllers/competences.controller.js";

const router = express.Router();

router.get("/", CompetenceController.getCompetencesHistory);

export default router;
