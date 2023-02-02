import express from "express";
import PermissionController from "../controllers/permissions.controller.js";

const router = express.Router();

router.get("/", PermissionController.getPermissions);
router.get("/:id", PermissionController.getPermission);

export default router;
