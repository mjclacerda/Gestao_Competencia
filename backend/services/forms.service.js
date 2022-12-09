import FormRepository from "../repositories/forms.repository.js";

async function insertForm(form) {
  if (form) {
    return await FormRepository.insertForm(form);
  }
  throw new Error("Não foi possível criar esses formulário");
}

async function getForms() {
  const forms = await FormRepository.getForms();
  if (forms) {
    return await FormRepository.getForms();
  }
  throw new Error("Não há formulários cadastrados");
}

async function getForm(id) {
  const form = await FormRepository.getForm(id);
  if (form) {
    return await FormRepository.getForm(id);
  }
  throw new Error("A form procurada não existe");
}

export default {
  insertForm,
  getForms,
  getForm,
};
