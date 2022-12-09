import FormService from "../services/forms.service.js";

async function insertForm(req, res, next) {
  try {
    let formulario = req.body;
    if (!formulario.name) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await FormService.insertForm(formulario));
    logger.info(`POST /form - ${JSON.stringify(formulario)}`);
  } catch (err) {
    next(err);
  }
}

async function getForms(req, res, next) {
  try {
    res.send(await FormService.getForms());
    logger.info("GET /forms");
  } catch (err) {
    next(err);
  }
}

async function getForm(req, res, next) {
  try {
    res.send(await FormService.getForm(req.params.id));
    logger.info("GET /form/:id");
  } catch (err) {
    next(err);
  }
}

export default {
  insertForm,
  getForms,
  getForm,
};
