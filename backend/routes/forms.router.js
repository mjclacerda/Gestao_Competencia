import express from "express";
import FormController from "../controllers/forms.controller.js";

const router = express.Router();

router.get("/", FormController.getForms);
router.get("/:id", FormController.getForm);

export default router;
