import express from "express";
import YearController from "../controllers/years.controller.js";

const router = express.Router();

router.get("/", YearController.getJustYears);

export default router;
