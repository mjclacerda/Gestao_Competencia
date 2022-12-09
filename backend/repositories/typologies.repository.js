import Typology from "../models/typologies.model.js";

async function insertTypology(typology) {
  try {
    return await Typology.create(typology);
  } catch (err) {
    throw err;
  }
}
//Na hora de retornar as tipologias, queremos apenas as tipologias que estão ativas.
async function getTypologies() {
  try {
    return await Typology.findAll({ where: { status: true } });
  } catch (err) {
    throw err;
  }
}

async function getTypology(id) {
  try {
    return await Typology.findByPk(id, { where: { status: true }, raw: true });
  } catch (err) {
    throw err;
  }
}
//Nenhuma tipologia será deletada, elas serão simplesmente inativadas
async function inativateTypology(typology) {
  try {
    return await Typology.update(typology, {
      where: {
        typologyId: typology.typologyId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateTypology(typology) {
  try {
    return await Typology.update(typology, {
      where: {
        typologyId: typology.typologyId,
      },
    });
    return await getTypology(typology.typologyId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertTypology,
  getTypologies,
  getTypology,
  inativateTypology,
  updateTypology,
};
