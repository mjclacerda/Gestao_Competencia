import TypologyService from "../services/typologies.service.js";

async function insertTypology(req, res, next) {
  try {
    let tipologia = req.body;
    if (!tipologia.typology || !tipologia.description || !tipologia.status) {
      throw new Error("Há campos obrigatórios não preenchidos");
    } else {
      res.send(await TypologyService.insertTypology(tipologia));
      logger.info(`POST /tipologia - ${JSON.stringify(tipologia)}`);
    }
  } catch (err) {
    next(err);
  }
}

async function getTypologies(req, res, next) {
  try {
    let tipologia = req.body;
    if (tipologia.typology) {
      try {
        res.send(await TypologyService.getTypologyByName(tipologia.typology));
        logger.info("GET /tipologia pelo nome");
      } catch (err) {
        next(err);
      }
    }
    res.send(await TypologyService.getTypologies());
    logger.info("GET /tipologia");
  } catch (err) {
    next(err);
  }
}

async function getTypology(req, res, next) {
  try {
    res.send(await TypologyService.getTypology(req.params.id));
    logger.info("GET /tipologia/:id");
  } catch (err) {
    next(err);
  }
}

async function inativateTypology(req, res, next) {
  try {
    let tipologia = req.body;
    if (!tipologia.typologyId) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await TypologyService.inativateTypology(tipologia));
    logger.info(`PUT /tipologia(inativate) - ${JSON.stringify(tipologia)}`);
  } catch (err) {
    next(err);
  }
}

async function updateTypology(req, res, next) {
  try {
    let tipologia = req.body;
    if (
      !tipologia.typologyId ||
      !tipologia.typology ||
      !tipologia.description
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await TypologyService.updateTypology(tipologia));
    logger.info(`PUT /tipologia - ${JSON.stringify(tipologia)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  insertTypology,
  getTypologies,
  getTypology,
  inativateTypology,
  updateTypology,
};
