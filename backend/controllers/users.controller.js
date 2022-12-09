import UserService from "../services/users.service.js";

async function getUsers(req, res, next) {
  try {
    res.send(await UserService.getUsers());
    logger.info("GET /forms");
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  try {
    res.send(await UserService.getUser(req.params.id));
    logger.info("GET /form/:id");
  } catch (err) {
    next(err);
  }
}

export default {
  getUsers,
  getUser,
};
