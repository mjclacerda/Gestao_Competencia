import FormRepository from "../repositories/forms.repository.js";

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
  throw new Error("O formulário procurado não existe");
}

export default {
  getForms,
  getForm,
};
