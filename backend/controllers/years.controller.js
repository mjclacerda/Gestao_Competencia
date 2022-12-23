import YearService from "../services/years.service.js";

async function insertYear(req, res, next) {
  try {
    let inventario = req.body;
    if (!inventario.open || !inventario.close || !inventario.year) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await YearService.insertYear(inventario));
    logger.info(`POST /year - ${JSON.stringify(inventario)}`);
  } catch (err) {
    next(err);
  }
}

async function getYears(req, res, next) {
  try {
    let yearbody = req.body;
    if (yearbody.year) {
      try {
        res.send(await YearService.getYearByName(yearbody));
        logger.info("GET /year pelo nome");
      } catch (err) {
        next(err);
      }
    }
    res.send(await YearService.getYears());
    logger.info("GET /year");
  } catch (err) {
    next(err);
  }
}

async function getJustYears(req, res, next) {
  try {
    res.send(await YearService.getJustYears());
    logger.info("GET /justyear");
  } catch (err) {
    next(err);
  }
}

async function getYear(req, res, next) {
  try {
    res.send(await YearService.getYear(req.params.id));
    logger.info("GET /year/:id");
  } catch (err) {
    next(err);
  }
}

async function updateYear(req, res, next) {
  try {
    let inventario = req.body;
    if (!inventario.yearId || !inventario.open || !inventario.close) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await YearService.updateYear(inventario));
    logger.info(`PUT /year - ${JSON.stringify(inventario)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  insertYear,
  getYears,
  getYear,
  getJustYears,
  updateYear,
};
