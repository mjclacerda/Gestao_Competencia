import Year from "../models/years.model.js";

async function insertYear(year) {
  try {
    return await Year.create(year);
  } catch (err) {
    throw err;
  }
}

async function getYears() {
  try {
    return await Year.findAll();
  } catch (err) {
    throw err;
  }
}

async function getYearByName(year) {
  try {
    return await Year.findAll({
      where: { close: year },
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
        year: yearbody.year,
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
  getYear,
  getYearByName,
  updateYear,
};
