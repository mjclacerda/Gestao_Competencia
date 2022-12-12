import express from "express";
import TypologyController from "../controllers/typologies.controller.js";

const router = express.Router();

router.post("/", TypologyController.insertTypology);
router.get("/", TypologyController.getTypologies);
router.get("/:id", TypologyController.getTypology);
router.put("/inativate", TypologyController.inativateTypology);
router.put("/", TypologyController.updateTypology);

export default router;
