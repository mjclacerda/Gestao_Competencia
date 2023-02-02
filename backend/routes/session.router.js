import express from "express";
import SessionController from "../controllers/session.controller.js";

const router = express.Router();

router.post("/", SessionController.create);

export default router;
