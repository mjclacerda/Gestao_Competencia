//Função para validar se uma data inicial é menor que uma data final
export function CompareDates(
  month: string,
  monthf: string,
  year: string,
  yearf: string
) {
  let ano = parseInt(year);
  let anof = parseInt(yearf);
  let mes = parseInt(month);
  let mesf = parseInt(monthf);
  if (anof < ano) {
    return false;
  }
  if (anof === ano) {
    if (mesf < mes) {
      return false;
    }
    return true;
  }
  if (anof > ano) {
    return true;
  }
}

export function CompareDatesExact(
  month: string,
  monthc: string,
  year: string,
  yearc: string
) {
  let anoclose = parseInt(yearc);
  let anoatual = parseInt(year);
  let mesclose = parseInt(monthc);
  let mesatual = parseInt(month);
  if (anoatual > anoclose) {
    return true;
  }
  if (anoatual === anoclose) {
    if (mesatual > mesclose) {
      return true;
    }
    return false;
  }
  if (anoatual < anoclose) {
    return false;
  }
}
