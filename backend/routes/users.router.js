import express from "express";
import UserController from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);

export default router;
