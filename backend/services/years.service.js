import YearRepository from "../repositories/years.repository.js";

async function insertYear(year) {
  if (year) {
    return await YearRepository.insertYear(year);
  }
  throw new Error("Não foi possível abrir esse inventário");
}

async function getYears() {
  const years = await YearRepository.getYears();
  if (years[0]) {
    return years;
  }
  throw new Error("Não há inventários cadastrados");
}

async function getYearByName(yearbody) {
  const year = await YearRepository.getYearByName(yearbody);
  if (year[0]) {
    return year;
  }
  throw new Error("Esse inventário não está cadastrados");
}

async function getYear(id) {
  const year = await YearRepository.getYear(id);
  if (year) {
    return year;
  }
  throw new Error("O inventário procurado não existe");
}

async function updateYear(yearbody) {
  const year = await YearRepository.getYear(yearbody.yearId);
  if (year) {
    return YearRepository.updateYear(yearbody);
  }
  throw new Error("Não há inventário para esse ano");
}

export default {
  insertYear,
  getYears,
  getYear,
  getYearByName,
  updateYear,
};
