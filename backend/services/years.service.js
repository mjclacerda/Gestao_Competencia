import YearRepository from "../repositories/years.repository.js";

async function insertYear(yearbody) {
  const year = await YearRepository.getYearByName(yearbody);
  if (!year[0]) {
    return await YearRepository.insertYear(yearbody);
  }
  throw new Error(
    "Não foi possível abrir esse inventário pois esse ano já foi cadastrado"
  );
}

async function getYears() {
  const years = await YearRepository.getYears();
  if (years[0]) {
    return years;
  }
  throw new Error("Não há anos cadastrados");
}

async function getJustYears() {
  const years = await YearRepository.getJustYears();
  if (years[0]) {
    return years;
  }
  throw new Error("Não há anos cadastrados");
}

async function getYearByName(yearbody) {
  const year = await YearRepository.getYearByName(yearbody);
  if (year[0]) {
    return year;
  }
  throw new Error("Esse ano não está cadastrado");
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
  getJustYears,
  getYearByName,
  updateYear,
};
