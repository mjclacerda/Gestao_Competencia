import FormService from "../services/forms.service.js";

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
  getForms,
  getForm,
};
