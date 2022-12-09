import Form from "../models/forms.model.js";

async function insertForm(form) {
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

export default {
  insertForm,
  getForms,
  getForm,
};
