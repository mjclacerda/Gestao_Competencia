import express from "express";
import CompetenceController from "../controllers/competences.controller.js";

const router = express.Router();

router.post("/", CompetenceController.insertCompetence);
router.get("/", CompetenceController.getCompetences);
router.get("/:id", CompetenceController.getCompetence);
router.patch("/inativate", CompetenceController.inativateCompetence);
router.put("/", CompetenceController.updateCompetence);

export default router;
