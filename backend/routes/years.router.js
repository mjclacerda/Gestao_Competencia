import express from "express";
import YearController from "../controllers/years.controller.js";

const router = express.Router();

router.post("/", YearController.insertYear);
router.get("/", YearController.getYears);
router.get("/:id", YearController.getYear);
router.put("/", YearController.updateYear);

export default router;
