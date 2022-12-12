import UserService from "../services/users.service.js";

async function insertUser(req, res, next) {
  try {
    let usuario = req.body;
    if (!usuario.name || !usuario.matricula) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await UserService.insertUser(usuario));
    logger.info(`POST /tipologia - ${JSON.stringify(usuario)}`);
  } catch (err) {
    next(err);
  }
}

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
  insertUser,
  getUsers,
  getUser,
};
