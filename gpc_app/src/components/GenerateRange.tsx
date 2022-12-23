//Função para gerar o ano atual mais o próximo ano
export function GenerateRange(n: number) {
  const date = new Date();
  return Array.from({ length: n }, (_, i) => i + date.getFullYear());
}
