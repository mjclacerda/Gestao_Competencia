//Função para gerar o ano atual mais o próximo ano
export function GenerateRange(n: number) {
  const date = new Date();
  return Array.from({ length: n }, (_, i) => i + date.getFullYear());
}
//Função para pegar o ano atual
export function DateNow() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}`;
}
