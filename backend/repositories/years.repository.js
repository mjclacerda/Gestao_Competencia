import Year from "../models/years.model.js";

async function insertYear(year) {
  try {
    return await Year.create({
      open: year.open,
      close: year.close,
      year: String(year.year),
    });
  } catch (err) {
    throw err;
  }
}

async function getYears() {
  try {
    return await Year.findAll({ order: [["year", "DESC"]] });
  } catch (err) {
    throw err;
  }
}

async function getJustYears() {
  try {
    return await Year.findAll({ attributes: ["year"] });
  } catch (err) {
    throw err;
  }
}

async function getYearByName(year) {
  try {
    return await Year.findAll({
      where: { year: String(year.year) },
    });
  } catch (err) {
    throw err;
  }
}

async function getYear(id) {
  try {
    return await Year.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateYear(yearbody) {
  try {
    await Year.update(
      {
        open: yearbody.open,
        close: yearbody.close,
      },
      {
        where: {
          yearId: yearbody.yearId,
        },
      }
    );
    return await getYear(yearbody.yearId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertYear,
  getYears,
  getJustYears,
  getYear,
  getYearByName,
  updateYear,
};
