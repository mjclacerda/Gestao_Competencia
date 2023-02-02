import PermissionService from "../services/permissions.service.js";

async function getPermissions(req, res, next) {
  try {
    res.send(await PermissionService.getPermissions());
    logger.info("GET /permissions");
  } catch (err) {
    next(err);
  }
}

async function getPermission(req, res, next) {
  try {
    res.send(await PermissionService.getPermission(req.params.id));
    logger.info("GET /permission/:id");
  } catch (err) {
    next(err);
  }
}

export default {
  getPermissions,
  getPermission,
};
