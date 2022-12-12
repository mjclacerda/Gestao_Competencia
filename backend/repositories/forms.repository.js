import Form from "../models/forms.model.js";

async function insertform(form) {
  try {
    return await Form.create(form);
  } catch (err) {
    throw err;
  }
}

async function getForms() {
  try {
    return await Form.findAll();
  } catch (err) {
    throw err;
  }
}

async function getForm(id) {
  try {
    return await Form.findByPk(id);
  } catch (err) {
    throw err;
  }
}

//Os três tipos de formulários são criados por padrão
async function standardForms() {
  await Form.create({ name: "autoavaliação" });
  await Form.create({ name: "avaliação chefia" });
  await Form.create({ name: "avaliação equipe" });
}

export default {
  insertform,
  getForms,
  getForm,
  standardForms,
};
